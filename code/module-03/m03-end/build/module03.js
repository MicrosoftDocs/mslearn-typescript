"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab End  */
/*  TODO: Replace the two parameters in the intOnlyLoan function with an object of
    type Loan (for example, loanTerms: Loan) and type the return value of the function
    as a string.
    
    Replace the parameter names in the function with properties of the Loan object.
    (For example, loanTerms.interestRate).
    
    Type the intr and pmt variables as numbers.*/
function intOnlyLoan(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let intr = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let pmt;
    pmt = loanTerms.principle * intr;
    return 'The interest only loan payment is ' + pmt.toFixed(2);
}
/*  TODO: Update the convLoan function, this time replacing the three parameters with an
    object of type ConvLoan and type the return value of the function as a string. */
function convLoan(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    let intr = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let pmt;
    pmt = loanTerms.principle * intr / (1 - (Math.pow(1 / (1 + intr), loanTerms.numMonths)));
    return 'The conventional loan payment is ' + pmt.toFixed(2);
}
let loan1 = intOnlyLoan({ principle: 30000, interestRate: 5 });
let loan2 = convLoan({ principle: 30000, interestRate: 5, numMonths: 180 });
console.log(loan1); //* Returns "The interest only loan payment is 125.00" 
console.log(loan2); //* Returns "The conventional loan payment is 237.24" 
