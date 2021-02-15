/*  Module 6: DGenerics in TypeScript
    Lab End */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type. */

// TODO: Add and apply a type variable.
class DataStore<T> {

    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
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

let cities = new DataStore<string>();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(2, "London");
cities.AddOrUpdate(11, "New York");
console.log(cities.GetData(11));        // returns 'undefined'

// TODO Test items as numbers.
let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);                  
console.log(empIDs.GetData(0));         // returns 50

// TODO Test items as objects.
type Pets = {
    name: string;
    breed: string;
    age: number
}
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3}
