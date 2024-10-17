class Car {
  constructor(make, model, year) {
    (this.make = make), (this.model = model), (this.year = year);
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year), (this.batteryLevel = batteryLevel);
  }
}

const electricCarObj = new ElectricCar("Toyota", "Prius", "2024", 93);
console.log(electricCarObj);
