class Car {
  constructor(name) {
    // added name parameter to constructor
    this.name = name; // assign name to this.name
  }

  printName() {
    console.log("Car name: " + this.name);
  }

  printAssembly() {
    console.log("The Tesla Car finishes assembly every Friday at 5pm.");
  }
}

class TeslaCar extends Car {
  generateAssemblyReports(format) {
    // added format parameter
    console.log("Generating assembly reports...");
    console.log("Exporting " + format + " format reports..."); // use format parameter
    console.log("Printing reports...");
  }
}

// Driver code
const myCar = new TeslaCar("Model_3");
myCar.printName();
myCar.generateAssemblyReports("Excel");
