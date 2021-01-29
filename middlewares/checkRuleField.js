function checkRuleField(req, res, next){
    let rule = req.body.rule
    let data = req.body.data
    let field = rule.field.split(".")
    let dataValue
    dataCheck(data)
    if(typeof(rule) !== "object"){
        res.status(400).json({
            "message": "Rule should be a|an Object.",
            "status": "error",
            "data": null
          })
    }
    if(!rule.field){
        return res.status(400).json({
            "message": "[rule.field] is required.",
            "status": "error",
            "data": null
          })
    }

    
    function dataCheck(data){
        if(Array.isArray(data) && data !== []){
            dataValue = data
            return true
        }
        else if(typeof(data) === "object" && data !== {} && !Array.isArray(data)){
            console.log(data[field[0]][field[1]])
            if(data[field[0]][field[1]]){
                dataValue = data[field[0]][field[1]]
                return true
            }
            if(data[field[0]] && !data[field[0]][field[1]]){
                dataValue = data[field[0]]
                return true
            }
        } else if(typeof(data) === "string" && data !== ""){
            dataValue = data
            return true
        }else{
            dataValue = null
            return false
        }
    }

    function checkFieldValue(data, field){
        if(data[field[0]]){
            if(data[field[0]] && !data[field[0]][field[1]]){
                return data[field[0]]
            }
            else if((data[field[0]][field[1]])){
                return data[field[0]][field[1]]
            }
            else{
                return false
            }
        }
        else{
            return false
        }
        
    }
    // Means the field value should be equal to the condition value
    
    if(checkFieldValue(data, field) && dataCheck(data)){
        if(rule.condition === "eq"){
            if(dataValue === rule.condition_value){
                res.status(200).json({
                    "message": `field ${rule.field} successfully validated.`,
                    "status": "success",
                    "data": {
                      "validation": {
                        "error": false,
                        "field": `${rule.field}`,
                        "field_value": `${checkFieldValue(data, field) }`,
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
                        "field_value": `${checkFieldValue(data, field)}`,
                        "condition": `${rule.condition}`,
                        "condition_value": `${rule.condition_value}`
                      }
                    }
                  })
            }
        
        }
        //  The field value should not be equal to the condition value 
        else if(rule.condition === "neq"){
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
        // Means the field value should be greater than the condition value
        else if(rule.condition === "gt"){
            if(dataValue > rule.condition_value){
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
                        "field_value": `${checkFieldValue(data, field)}`,
                        "condition": `${rule.condition}`,
                        "condition_value": `${rule.condition_value}`
                      }
                    }
                  })
            }
        }
        // The field value should be greater than or equal to the condition value
        else if(rule.condition === "gte"){
            if(dataValue >= rule.condition_value){
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
                        "field_value": `${checkFieldValue(data, field)}`,
                        "condition": `${rule.condition}`,
                        "condition_value": `${rule.condition_value}`
                      }
                    }
                  })
            }
        }

        // The field value should contain the condition value
        else if(rule.condition === "contains"){
            if(dataValue.includes(rule.condition_value) ){
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
                        "field_value": `${checkFieldValue(data, field)}`,
                        "condition": `${rule.condition}`,
                        "condition_value": `${rule.condition_value}`
                      }
                    }
                  })
            }
        }
        else{
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