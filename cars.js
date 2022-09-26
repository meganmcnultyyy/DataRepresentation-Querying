class Vehicle {
    // Constructor is where data is intialised in the class 
    constructor(make, model, year) {
        // Assign to local variables
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Information Method that logs make, model and year to the console
    Information() {
        // $ allows you to write javascript inside ``
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}


// Class car inherits the Vehicle class
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        // Super allows you to access the parent constructor
        super(make, model, year);
        this.doors = doors;
    }

    // Outputs all Vehicle information but adds doors
    Information() {
        // Access parent method
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

// Assign them to memory
let myCar = new Car('VW', 'Golf', 2022, 5);
// Invoke method
myCar.Information();