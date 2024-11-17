import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_FILE = join(__dirname, "../database/expenses.json");

const readData = () => {
  try {
    const data = readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
};

export default { readData, writeData };
