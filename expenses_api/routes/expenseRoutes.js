import { Router } from "express";
import expenseController from "../controllers/expenseController.js";

const {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
} = expenseController;

const router = Router();

router.get("/", getExpenses);
router.get("/:id", getExpenseById);
router.post("/", createExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;
