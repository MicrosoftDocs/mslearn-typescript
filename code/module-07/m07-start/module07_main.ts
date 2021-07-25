/*  Module 7: Working with external libraries
    Lab Start */

/*  TODO Add the import statement. */

/*  TODO Update the function calls. */
let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalLoanPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
