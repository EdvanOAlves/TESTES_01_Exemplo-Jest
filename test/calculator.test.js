/*******************************************************************************************
 * Objective: This file is assigned to execute Unitary Tests on calculator.js. We'll validate
 * each and every function created on that file
 * Date: 24/02/2026
 * Test Author: Edvan
 * Dev Author: Edvan
 * Version 1.0
 * 
*******************************************************************************************/

// Importing file to go through the unitary tests
const mathCalculator = require('../model/calculator.js')

// SCENARIO 01: Testing data Verification
test('Validation of data input for a number:', function(){
    //Invalid inputs
    expect(mathCalculator.verifyData(null)).toBe(false)
    expect(mathCalculator.verifyData(undefined)).toBe(false)
    expect(mathCalculator.verifyData('a')).toBe(false)
    expect(mathCalculator.verifyData('2a')).toBe(false)
    expect(mathCalculator.verifyData('4,5')).toBe(false)
    
    //Valid inputs
    expect(mathCalculator.verifyData(5)).toBe(true)
    expect(mathCalculator.verifyData(5.6)).toBe(true)
    expect(mathCalculator.verifyData('5')).toBe(true)
    expect(mathCalculator.verifyData('5.6')).toBe(true)
})

// SCENARIO 02: Testing validation for SUM operation
test('Validation of SUM with two numbers', function(){
    //Valid inputs
    expect (mathCalculator.calculate(10,30, 'sum')).toBe(40)
    expect (mathCalculator.calculate(10,30, 'somar')).toBe(40)
    expect (mathCalculator.calculate('10', '30','sum')).toBe(40)
    expect (mathCalculator.calculate('10', '30','somar')).toBe(40)
    expect (mathCalculator.calculate(5.6, 3.2, 'sum')).toBe(8.8)
    expect (mathCalculator.calculate('5.6', '3.2','sum')).toBe(8.8)
    expect (mathCalculator.calculate(10, 30,'SoMaR')).toBe(40)
    
    //Invalid inputs
    expect (mathCalculator.calculate(10, 30,'soma')).toBe(false)
})

// SCENARIO 03: Testing validation for SUBTRACTION operation
test('Validation of SUBTRACT with two numbers', function(){
    //Valid inputs
    expect (mathCalculator.calculate(10,30, 'subtract')).toBe(-20)
    expect (mathCalculator.calculate(40,30, 'subtract')).toBe(10)
    expect (mathCalculator.calculate(5.6, 4.2,'subtract')).toBe(1.4)
    expect (mathCalculator.calculate('10', '30','subTRAIR')).toBe(-20)

    //Invalid inputs
    expect (mathCalculator.calculate(10, 30,'subtrai aí meu')).toBe(false)
})