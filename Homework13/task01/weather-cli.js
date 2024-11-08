import fetch from "node-fetch";
import { Command } from "commander";

const program = new Command();

program
  .version("1.0.0")
  .description("Get the current weather of a city")
  .argument("<cityName>", "Name of the city")
  .action(async (cityName) => {
    const apiKey = "895284fb2d2c50a520ea537456963d9c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found or API error occured");
      }

      const data = await response.json();
      const temperature = data.main.temp;

      console.log(`The current temperature in ${cityName} is ${temperature}°C`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  });

program.parse(process.argv);
