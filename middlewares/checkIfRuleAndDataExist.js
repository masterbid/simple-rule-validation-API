function checkIfRuleAndDataExist(req, res, next){
    if(!req.body.rule){
        return res.status(400).json({
            "message": "Rule is required.",
            "status": "error",
            "data": null
          })
    }
    if(!req.body.data){
        return res.status(400).json({
            "message": "Data is required.",
            "status": "error",
            "data": null
          })
    }
    next()
}

module.exports = checkIfRuleAndDataExist