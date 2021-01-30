const checkFieldValue = require("./checkFieldValue")
const failedValidation = require("./failedValidation")

function defaultResponseFn(res,rule, field, data){
    failedValidation(res, rule, checkFieldValue(data, field))
}

module.exports = defaultResponseFn