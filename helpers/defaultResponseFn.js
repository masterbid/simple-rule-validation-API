const checkFieldValue = require("./checkFieldValue")

function defaultResponseFn(res,rule, field, data){
    res.status(400).json({
        "message": `field ${rule.field} failed validation.`,
        "status": "error",
        "data": {
          "validation": {
            "error": true,
            "field": `${rule.field}`,
            "field_value": `${checkFieldValue(data, field)}`,
            "condition": `${rule.condition}`,
            "condition_value": `${rule.condition_value}`
          }
        }
      })
}

module.exports = defaultResponseFn