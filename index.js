const express = require("express")
const app = express()
const checkRuleField = require('./middlewares/checkRuleField')
const checkIfRuleAndDataExist = require('./middlewares/checkIfRuleAndDataExist')

// Pass Json Data 
app.use(express.json())

const port = 4000

// Base route
app.get('/', (req, res) => {
    res.status(200).json({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
          "name": "Bassey Iniabasi Edet",
          "github": "@masterbid",
          "email": "b.iniabasi@gmail.com",
          "mobile": "07069545327, 07085899976",
          "twitter": "@alalaboy"
        }
      })
})
// End Base Route

// Validate Api Endpoint
app.post('/validate-rule', checkIfRuleAndDataExist, checkRuleField)
// End Validate Api Endpoint


app.listen(port || process.env.PORT, (req, res) =>{
    console.log("Server Started Successfully")
})