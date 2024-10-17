class Employee {
  #salary = 0;
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  calculateSalary(workedHours, hourlyRate) {
    this.#salary = workedHours * hourlyRate;
    return this;
  }

  showSalary() {
    console.log(this.#salary);
    return;
  }
}

myEmpl = new Employee("Tato", "Topuria", 27);
myEmpl.calculateSalary(120, 25).showSalary();
