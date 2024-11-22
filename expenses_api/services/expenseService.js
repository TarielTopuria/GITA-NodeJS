import fileOperations from '../utils/fileOperations.js';
const { readData, writeData } = fileOperations;

const getAllExpenses = () => readData();
const getExpenseById = (id) => {
  const expenses = readData();
  return expenses.find((e) => e.id === parseInt(id));
};
const createExpense = (expense) => {
  const expenses = readData();
  expenses.push(expense);
  writeData(expenses);
};
const updateExpenseById = (id, updatedExpense) => {
  const expenses = readData();
  const index = expenses.findIndex((e) => e.id === parseInt(id));
  if (index !== -1) {
    expenses[index] = { ...expenses[index], ...updatedExpense };
    writeData(expenses);
    return expenses[index];
  }
  return null;
};
const deleteExpenseById = (id) => {
  const expenses = readData();
  const index = expenses.findIndex((e) => e.id === parseInt(id));
  if (index !== -1) {
    const deletedExpense = expenses.splice(index, 1);
    writeData(expenses);
    return deletedExpense[0];
  }
  return null;
};

export default {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpenseById,
  deleteExpenseById,
};
