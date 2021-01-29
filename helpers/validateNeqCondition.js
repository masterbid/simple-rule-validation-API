const checkFieldValue = require("./checkFieldValue")

function validateNeqCondition(res, rule, dataValue, field, data){
    if(dataValue !== rule.condition_value){
        res.status(200).json({
            "message": `field ${rule.field} successfully validated.`,
            "status": "success",
            "data": {
              "validation": {
                "error": false,
                "field": `${rule.field}`,
                "field_value": `${checkFieldValue(data, field)}`,
                "condition": `${rule.condition}`,
                "condition_value": `${rule.condition_value}`
              }
            }
          })
    }else{
        res.status(400).json({
            "message": `field ${rule.field} failed validation.`,
            "status": "error",
            "data": {
              "validation": {
                "error": true,
                "field": `${rule.field}`,
                "field_value": `${checkFieldValue(data, field) }`,
                "condition": `${rule.condition}`,
                "condition_value": `${rule.condition_value}`
              }
            }
          })
    }
}

module.exports = validateNeqCondition