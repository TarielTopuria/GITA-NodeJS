import { Command } from "commander";
import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();
const DATA_PATH = path.join(__dirname, "data.json");

function loadExpenses() {
  if (!existsSync(DATA_PATH)) return [];
  return JSON.parse(readFileSync(DATA_PATH, "utf8"));
}

function saveExpenses(expenses) {
  writeFileSync(DATA_PATH, JSON.stringify(expenses, null, 2));
}

program
  .command("create")
  .description("Create a new expense")
  .requiredOption("-c, --category <category>", "Category of the expense")
  .requiredOption("-p, --price <price>", "Price of the expense")
  .option("-d, --description <description>", "Description of the expense")
  .option("-l, --location <location>", "Location of the expense")
  .option("-m, --comment <comment>", "Additional comment for the expense")
  .action((options) => {
    const { category, price, description, location, comment } = options;
    const priceValue = parseFloat(price);

    if (priceValue < 10) {
      console.error("Validation Error: The minimum cost should be 10 GEL.");
      return;
    }

    const expense = {
      id: uuidv4(),
      category,
      price: priceValue,
      description: description || "No description",
      location: location || "No location provided",
      comment: comment || "No comment provided",
      date: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };

    const expenses = loadExpenses();
    expenses.push(expense);
    saveExpenses(expenses);

    console.log(`Expense created successfully:`, expense);
  });

program
  .command("show")
  .description("Show all expenses")
  .option("--asc", "Sort by creation date ascending")
  .option("--desc", "Sort by creation date descending")
  .action((options) => {
    const expenses = loadExpenses();

    if (options.asc) {
      expenses.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (options.desc) {
      expenses.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    console.log("Expenses:", expenses);
  });

program
  .command("getById <id>")
  .description("Get an expense by ID")
  .action((id) => {
    const expenses = loadExpenses();
    const expense = expenses.find((exp) => exp.id === id);

    if (expense) {
      console.log("Expense:", expense);
    } else {
      console.error("Expense not found with ID:", id);
    }
  });

program
  .command("update <id>")
  .description("Update an expense by ID")
  .requiredOption("-c, --category <category>", "Category of the expense")
  .requiredOption("-p, --price <price>", "Price of the expense")
  .option("-d, --description <description>", "Description of the expense")
  .option("-l, --location <location>", "Location of the expense")
  .option("-m, --comment <comment>", "Additional comment for the expense")
  .action((id, options) => {
    const { category, price, description, location, comment } = options;
    const priceValue = parseFloat(price);

    if (priceValue < 10) {
      console.error("Validation Error: The minimum cost should be 10 GEL.");
      return;
    }

    const expenses = loadExpenses();
    const expenseIndex = expenses.findIndex((exp) => exp.id === id);

    if (expenseIndex === -1) {
      console.error("Expense not found with ID:", id);
      return;
    }

    expenses[expenseIndex] = {
      ...expenses[expenseIndex],
      category,
      price: priceValue,
      description: description || expenses[expenseIndex].description,
      location: location || expenses[expenseIndex].location,
      comment: comment || expenses[expenseIndex].comment,
      date: new Date().toISOString(),
      created_at: expenses[expenseIndex].created_at,
    };

    saveExpenses(expenses);
    console.log(`Expense updated:`, expenses[expenseIndex]);
  });

program
  .command("delete <id>")
  .description("Delete an expense by ID")
  .action((id) => {
    let expenses = loadExpenses();
    expenses = expenses.filter((exp) => exp.id !== id);
    saveExpenses(expenses);

    console.log(`Expense with ID ${id} deleted.`);
  });

program
  .command("price")
  .description("Sort expenses by price")
  .option("--asc", "Sort by price ascending")
  .option("--desc", "Sort by price descending")
  .action((options) => {
    const expenses = loadExpenses();

    if (options.asc) {
      expenses.sort((a, b) => a.price - b.price);
    } else if (options.desc) {
      expenses.sort((a, b) => b.price - a.price);
    }

    console.log("Expenses sorted by price:", expenses);
  });

program.parse(process.argv);
