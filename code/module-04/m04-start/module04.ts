/* Module 4: Develop typed functions using TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */
    type compareFuncType = (a: number, b: number) => number;

/*  TODO: Convert the sortDescending and sortAscending functions to arrow 
    functions. */

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in descending order */
let sortDescending: compareFuncType = (a, b) => {
if (a > b) {
    return -1;
} else if (b > a) {
    return 1;
} else {
    return 0;
}
}

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in ascending order. */
let sortAscending: compareFuncType = (a, b) => {
if (a > b) {
    return 1;
} else if (b > a) {
    return -1;
} else {
    return 0;
}
}

/*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');

/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */

function loanCalculator (principle: number, interestRate: number, months = 12) {
    let interest = interestRate / 1200;   // Calculates the monthly interest rate
    let payment;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan = loanCalculator(1000, 5);
console.log(myLoan);