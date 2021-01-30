
function failedValidation(res, rule, field_value){
    res.status(400).json({
        "message": `field ${rule.field} failed validation.`,
        "status": "error",
        "data": {
          "validation": {
            "error": true,
            "field": `${rule.field}`,
            "field_value": `${field_value}`,
            "condition": `${rule.condition}`,
            "condition_value": `${rule.condition_value}`
          }
        }
    })
}

module.exports = failedValidation