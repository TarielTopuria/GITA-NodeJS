const fs = require("fs");
const [, , carModel, carReleaseDate, carColor] = process.argv;

if (!carModel || !carReleaseDate || !carColor) {
  console.error(
    "Please provide carModel, carReleaseDate, and carColor as arguments."
  );
  process.exit(1);
}

const car = {
  id: Date.now(),
  carModel,
  carReleaseDate,
  carColor,
};

function appendCarToFile() {
  fs.readFile("cars.json", "utf8", (err, data) => {
    let cars = [];

    if (!err && data) cars = JSON.parse(data);

    cars.push(car);

    fs.writeFile("cars.json", JSON.stringify(cars, null, 2), (err) => {
      if (err) throw err;
      console.log("Car has been added to cars.json");
    });
  });
}

appendCarToFile();
