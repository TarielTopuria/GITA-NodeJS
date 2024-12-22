const expenseModel = require("../../models/expense.model");
const { isValidObjectId } = require("mongoose");

const getAllExpenses = async (req, res) => {
  let { page = 1, take = 20 } = req.query;
  take > 20 ? (take = 20) : take;

  const response = await expenseModel
    .find()
    .skip((page - 1) * take)
    .limit(take)
    .sort({ createdAt: -1 });

  res.render("pages/expenses/expenses.home.ejs", { response });
};

const getExpenseById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }
  const expense = await expenseModel.findById(id);

  if (!expense) {
    return res.status(404).json({ message: "Expense not found!", data: null });
  }

  res.render("pages/expenses/expenses.details.ejs", { expense });
};

const createExpense = async (req, res) => {
  const { type, cost, quantity } = req.body;

  if (!type || !cost) {
    return res
      .status(400)
      .json({ message: `type and cost are required`, data: null });
  }

  const newExpense = await expenseModel.create({ type, cost, quantity });

  res
    .status(201)
    .json({ message: `Expenses created successfully`, data: newExpense });
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const deletedExpense = await expenseModel.findByIdAndDelete(id);

  if (!deletedExpense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json({
    message: `Expense deleted successfully`,
    data: deletedExpense,
  });
};

const updateExpense = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const updatedExpense = await expenseModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedExpense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json({
    message: `Expense updated successfully`,
    data: updatedExpense,
  });
};

const addExpense = (req, res) => {
  res.render("pages/expenses/expenses.add.ejs");
};

const findExpense = async (id) => {
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const expense = await expenseModel.findById(id);

  if (!expense) {
    return res.status(404).json({ message: "Expense not found!", data: null });
  }

  return expense;
};

const putExpense = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Id format is incorrect" });
  }

  const expense = await findExpense(id);

  if (!expense) {
    return res.status(404).send("Expense not found");
  }

  res.render("pages/expenses/expenses.update.ejs", { expense });
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  deleteExpense,
  updateExpense,
  addExpense,
  putExpense,
};
