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