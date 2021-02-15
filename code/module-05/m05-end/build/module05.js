"use strict";
// Comparison function that tells the sort method how to sort numbers in descending order
let sortDescending2 = (a, b) => {
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
// Comparison function that tells the sort method how to sort numbers in ascending order
let sortAscending2 = (a, b) => {
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
// This function builds an array of unique random numbers containing the number of items based on the number passed to it.
// The sortOrder parameter determines whether to sort the array in ascending or decending order.
function buildArray2(items, sortOrder) {
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
        return randomNumbers.sort(sortAscending2);
    }
    else {
        return randomNumbers.sort(sortDescending2);
    }
}
let testArray1 = buildArray2(12, 'ascending');
let testArray2 = buildArray2(8, 'descending');
console.log(testArray1);
console.log(testArray2);
