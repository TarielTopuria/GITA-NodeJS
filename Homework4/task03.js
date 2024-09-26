const car = {
  make: "Honda",
  model: "Civic",
  year: 2009,
  getDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  },
};

console.log(car.getDescription());
