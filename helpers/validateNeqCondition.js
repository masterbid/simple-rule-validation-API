const checkFieldValue = require("./checkFieldValue")
const successfulValidation = require("./successfulValidation")
const failedValidation = require("./failedValidation")

function validateNeqCondition(res, rule, dataValue, field, data){
    if(dataValue !== rule.condition_value){
      successfulValidation(res, rule, checkFieldValue(data, field))
    }else{
      failedValidation(res, rule, checkFieldValue(data, field))
    }
}

module.exports = validateNeqCondition