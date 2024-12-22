import { Router } from "express";
import {
  getAllExpenses,
  getExpenseById,
  createExpense,
  deleteExpense,
  updateExpense
} from "./expenses.service";
import authMiddleware from "../../middlewares/auth.middlware";

const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/:id", getExpenseById);
expensesRouter.post("/", createExpense);
expensesRouter.delete("/:id", authMiddleware, deleteExpense);
expensesRouter.put("/:id", updateExpense);

export default expensesRouter;