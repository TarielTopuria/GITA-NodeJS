import { program } from "commander";
import { readFileSync, writeFileSync } from "fs";

const carsFile = "cars.json";

function readCars() {
  try {
    const data = readFileSync(carsFile, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeCars(cars) {
  writeFileSync(carsFile, JSON.stringify(cars, null, 2));
}

program
  .command("show")
  .description("Show all cars")
  .action(() => {
    const cars = readCars();
    cars.forEach((car) => {
      console.log(
        `ID: ${car.id}, Name: ${car.name}, Price: ${car.price}, Color: ${car.color}`
      );
    });
  });

program
  .command("get <id>")
  .description("Get a car by ID")
  .action((id) => {
    const cars = readCars();
    const car = cars.find((car) => car.id === parseInt(id));

    if (car) {
      console.log(
        `ID: ${car.id}, Name: ${car.name}, Price: ${car.price}, Color: ${car.color}`
      );
    } else {
      console.log(`Car with ID ${id} not found.`);
    }
  });

program
  .command("add <name> <price> <color>")
  .description("Add a new car")
  .action((name, price, color) => {
    const cars = readCars();
    cars.push({ id: cars.length + 1, name, price, color });
    writeCars(cars);
    console.log("Car added successfully!");
  });

program
  .command("update <id> <name> <price> <color>")
  .description("Update a car")
  .action((id, name, price, color) => {
    const cars = readCars();
    const carIndex = cars.findIndex((car) => car.id === parseInt(id));

    if (carIndex !== -1) {
      cars[carIndex] = { id: parseInt(id), name, price, color };
      writeCars(cars);
      console.log(`Car with ID ${id} updated successfully!`);
    } else {
      console.log(`Car with ID ${id} not found.`);
    }
  });

program
  .command("delete <id>")
  .description("Delete a car")
  .action((id) => {
    const cars = readCars();
    const filteredCars = cars.filter((car) => car.id !== parseInt(id));
    writeCars(filteredCars);
    console.log(`Car with ID ${id} deleted successfully!`);
  });

program.parse(process.argv);
