/*******************************************************************************************
 * Objective: This file is assigned to math operations
 * Date: 24/02/2026
 * Author: Edvan
 * Version 1.0
 * 
*******************************************************************************************/

// Validation
const verifyData = function(number){
    if(number == '' || isNaN(number) || number == null || number == undefined){
        return false
    }
    else
        return true

}

// Math operations
const calculate = function(number1, number2, operation){
    let value1 = Number(number1)
    let value2 = Number(number2)
    let operationType = String(operation.toUppercase)

    if (operationType == 'SUM' || 'SOMAR'){
        result = value1 + value2
    }
    else if (operationType == 'SUBTRACT' || 'SUBTRAIR'){
        result = value1-value2
    }
    else if (operationType == 'MULTIPLY' || 'MULTIPLICAR'){
        result = value1*value2
    }
    else if (operationType == 'DIVIDE' || 'DIVIDIR'){
        result = value1/value2
    }
    else{
        return false
    }

    return result
}
