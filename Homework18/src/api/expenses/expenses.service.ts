import { Request, Response } from "express";
import expenseModel from "../../models/expense.model";
import { isValidObjectId } from "mongoose";

const getAllExpenses = async (req: Request, res: Response): Promise<void> => {
  let { page = 1, take = 20 } = req.query;
  take = Math.min(Number(take), 20);

  const response = await expenseModel
    .find()
    .skip((Number(page) - 1) * take)
    .limit(take)
    .sort({ createdAt: -1 });

    res.status(200).json(response);
};

const getExpenseById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Id format is incorrect" });
    return;
  }
  const expense = await expenseModel.findById(id);

  if (!expense) {
    res.status(404).json({ message: "Expense not found!", data: null });
    return;
  }

  res.status(200).json(expense);
};

const createExpense = async (req: Request, res: Response): Promise<void> => {
  const { type, cost, quantity } = req.body;

  if (!type || !cost) {
    res.status(400).json({ message: `type and cost are required`, data: null });
    return;
  }

  const newExpense = await expenseModel.create({ type, cost, quantity });

  res.status(201).json({ message: `Expenses created successfully`, data: newExpense });
};

const deleteExpense = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Id format is incorrect" });
    return;
  }

  const deletedExpense = await expenseModel.findByIdAndDelete(id);

  if (!deletedExpense) {
    res.status(404).json({ message: "Expense not found" });
    return;
  }

  res.status(200).json({ message: `Expense deleted successfully`, data: deletedExpense });
};

const updateExpense = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Id format is incorrect" });
    return;
  }

  const updatedExpense = await expenseModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedExpense) {
    res.status(404).json({ message: "Expense not found" });
    return;
  }

  res.status(200).json({ message: `Expense updated successfully`, data: updatedExpense });
};

export {
  getAllExpenses,
  getExpenseById,
  createExpense,
  deleteExpense,
  updateExpense
};