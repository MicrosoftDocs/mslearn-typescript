/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {

    private _data = new Array(10);
    
    AddOrUpdate(index: number, item: string) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            alert('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.


// TODO Test items as objects.
