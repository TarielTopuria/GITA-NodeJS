class CarFactory {
  #cars = [];
  #idCounter = 1;

  addCar(make, model, year) {
    const car = {
      id: this.#idCounter++,
      make,
      model,
      year,
    };
    this.#cars.push(car);
  }

  deleteCar(id) {
    const carIndex = this.#cars.findIndex((car) => car.id === id);

    if (carIndex !== -1) {
      this.#cars.splice(carIndex, 1);
    } else {
      console.log(`Car with ID ${id} not found`);
    }
  }

  updateCar(id, updatedDetails) {
    const car = this.#cars.find((car) => car.id === id);

    if (car) {
      Object.assign(car, updatedDetails);
    } else {
      console.log(`Car with ID ${id} not found`);
    }
  }

  getAllCars() {
    console.log(this.#cars);
  }
}

const factory = new CarFactory();
factory.addCar("Toyota", "Corolla", 2020);
factory.addCar("Honda", "Civic", 2019);
factory.getAllCars();
