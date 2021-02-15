"use strict";
/*  Module 6: DGenerics in TypeScript
    Lab End */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type. */
// TODO: Add a type variable called T to the class declaration.
class DataStore {
    constructor() {
        //TODO: Add the type variable to the _data property declaration.
        this._data = new Array(10);
    }
    //TODO: Update the type of the item parameter in the AddOrUpdate function to use the type variable.
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(2, "London");
cities.AddOrUpdate(11, "New York");
console.log(cities.GetData(11)); // returns 'undefined'
// TODO Test items as numbers
let empIDs = new DataStore();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);
console.log(empIDs.GetData(0)); // returns 50
let pets = new DataStore();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5 });
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 });
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3}
