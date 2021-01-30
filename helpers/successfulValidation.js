

function successfulValidation(res, rule, field_value){
    res.status(200).json({
        "message": `field ${rule.field} successfully validated.`,
        "status": "success",
        "data": {
          "validation": {
            "error": false,
            "field": `${rule.field}`,
            "field_value": `${field_value}`,
            "condition": `${rule.condition}`,
            "condition_value": `${rule.condition_value}`
          }
        }
      })
}

module.exports = successfulValidation