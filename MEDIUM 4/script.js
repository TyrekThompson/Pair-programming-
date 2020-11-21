class Car{
    constructor(make, model, year, milage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color = color;
    }
    driveToWork() {
        return this.milage += 33
    }

    driveAroundTheWorld() {
        return this.milage += 24000
    }

    runErrands() {
        return this.milage += 30
    }
}


let myCar = new Car("DODGE", "CHARGER", 2020, 2000, "PURPLE")



console.log(myCar.driveToWork())
console.log(myCar.driveAroundTheWorld())
console.log(myCar.runErrands())
console.log(myCar.driveToWork())
console.log(myCar.driveToWork())