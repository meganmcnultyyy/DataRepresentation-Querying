class BMI {
    // Constructor is where data is intialised in the class 
    constructor(height, weight) {
        // Assign to local variables
        this.height = height;
        this.weight = weight;
    }

    // BMI Method to return the individuals bmi using the formula
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}

let myBMI = new BMI(2, 100);

let result = myBMI.calculateBMI();

// Display to the console 
console.log(result);