"use strict";
/* Module 4: Develop typed functions using TypeScript
   Lab End  */
/*  TODO: Convert the sortDescending and sortAscending functions to anonymous
    functions and assign them to variables of the same name. Add types to the
    parameter lists and return values for each function. */
/* sortDescending is a comparison function that tells the sort method how to sort
    numbers in descending order */
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
        ;
    }
    else if (b > a) {
        return 1;
        ;
    }
    else {
        return 0;
    }
};
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in ascending order. */
let sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
/*  The buildArray function builds an array of unique random numbers containing the number
    of items based on the number passed to it. The sortOrder parameter determines
    whether to sort the array in ascending or descending order. */
/*  TODO: In the BuildArray function, add types to parameter list,
    return value, and variables. */
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber;
    for (let i = 0; i < items; i++) {
        nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            i--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
/*  EXERCISE 2
TODO: Convert the LoanCalc function to TypeScript with strongly typed parameters, variables,
and return types. Make the numMonths parameter optional but assign it a default value of 12
months if omitted. */
function LoanCalc(principle, interestRate, numMonths = 12) {
    let intr = interestRate / 1200; // Calculates the monthly interest rate 
    let pmt;
    Number;
    pmt = principle * intr / (1 - (Math.pow(1 / (1 + intr), numMonths)));
    return pmt.toFixed(2);
}
let myLoan = LoanCalc(1000, 5);
console.log(myLoan);
