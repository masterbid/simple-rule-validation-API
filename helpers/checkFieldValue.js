function checkFieldValue(data, field){
    if(data[field[0]]){
        if(data[field[0]] && !data[field[0]][field[1]]){
            return data[field[0]]
        }
        else if((data[field[0]][field[1]])){
            return data[field[0]][field[1]]
        }
        else{
            return null
        }
    }
    else{
        return false
    }
    
}

module.exports = checkFieldValue