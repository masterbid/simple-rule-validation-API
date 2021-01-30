const checkFieldValue = require("./checkFieldValue")
const successfulValidation = require("./successfulValidation")
const failedValidation = require("./failedValidation")

function validateContainsCondition(res, rule, dataValue, field, data){
    if(dataValue.includes(rule.condition_value) ){
      successfulValidation(res, rule, checkFieldValue(data, field))
    }else{
      failedValidation(res, rule, checkFieldValue(data, field))
    }
}

module.exports = validateContainsCondition