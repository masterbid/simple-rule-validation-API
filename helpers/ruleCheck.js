function ruleCheck(rule){
    if(typeof(rule) !== "object"){
        res.status(400).json({
            "message": "Rule should be a|an Object.",
            "status": "error",
            "data": null
          })
    }
    if(!rule.field){
        return res.status(400).json({
            "message": `${rule.field} is required.`,
            "status": "error",
            "data": null
          })
    }
}

module.exports = ruleCheck