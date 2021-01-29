const checkFieldValue = require("../helpers/checkFieldValue")
const dataCheck = require("../helpers/dataCheck")
const ruleCheck = require("../helpers/ruleCheck")
const validateEqCondition = require("../helpers/validateEqCondition")
const validateNeqCondition = require("../helpers/validateNeqCondition")
const validateGtCondition = require("../helpers/validateGtCondition")
const validateGteCondition = require("../helpers/validateGteCondition")
const validateContainsCondition = require("../helpers/validateContainsCondition")
const defaultResponseFn = require("../helpers/defaultResponseFn")


function checkRuleField(req, res, next){
    let rule = req.body.rule
    let data = req.body.data
    let field = rule.field.split(".")
    let { check , dataValue } = dataCheck(data, field)
    

    ruleCheck(rule)
    // Means the field value should be equal to the condition value
    
    if(checkFieldValue(data, field) && check){
      let response;

      switch (rule.condition) {
          case "eq":
              response = validateEqCondition(res, rule, dataValue, field, data);
              break;
          case "neq":
              response = validateNeqCondition(res, rule, dataValue, field, data);
              break;
          case "gt":
              response = validateGtCondition(res, rule, dataValue, field, data);
              break;
          case "gte":
              response = validateGteCondition(res, rule, dataValue, field, data);
              break;
          case "contains":
              response = validateContainsCondition(res, rule, dataValue, field, data);
              break;
          default:
              response = defaultResponseFn(res, rule, field, data);
              break;
      }

      // const {statusCode, body} = response;

      // return res.status(statusCode).json(body)
      return response

       
    }else{
        res.status(400).json({
            "message": `field ${rule.field} is missing from data.`,
            "status": "error",
            "data": null
            })
        }

    next()
}

module.exports = checkRuleField