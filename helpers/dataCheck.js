let dataValue
function dataCheck(data, field){
    if(Array.isArray(data) && data !== []){
        dataValue = data
        return {
            check: true,
            dataValue
        }
    }
    else if(typeof(data) === "object" && data !== {} && !Array.isArray(data)){
        if(data[field[0]][field[1]]){
            dataValue = data[field[0]][field[1]]
            return {
                check: true,
                dataValue
            }
        }
        if(data[field[0]] && !data[field[0]][field[1]]){
            dataValue = data[field[0]]
            return {
                check: true,
                dataValue
            }
        }
    } else if(typeof(data) === "string" && data !== ""){
        dataValue = data
        return {
            check: true,
            dataValue
        }
    }else{
        dataValue = null
        return {
            check: false,
            dataValue
        }
    }
}

module.exports = dataCheck