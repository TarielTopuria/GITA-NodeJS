const { Router } = require("express");
const {
  getAllExpenses,
  getExpenseById,
  createExpense,
  deleteExpense,
  updateExpense,
  addExpense,
  putExpense,
} = require("./expenses.service");
const authMiddlware = require("../../middlewares/auth.middlware");

const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/add", addExpense);
expensesRouter.get("/putExpense/:id", putExpense);
expensesRouter.get("/:id", getExpenseById);
expensesRouter.post("/", createExpense);
expensesRouter.delete("/:id", authMiddlware, deleteExpense);
expensesRouter.put("/:id", updateExpense);

module.exports = expensesRouter;
