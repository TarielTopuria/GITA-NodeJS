import fileOperations from '../utils/fileOperations.js';
const { readData, writeData } = fileOperations;

const getAllExpenses = () => readData();

const getExpenseById = (id) => {
  const expenses = readData();
  return expenses.find((e) => e.id === parseInt(id));
};

const createExpense = ({ title, amount, date }) => {
  const expenses = readData();
  const newExpense = { id: Date.now(), title, amount, date };
  expenses.push(newExpense);
  writeData(expenses);
};

const updateExpenseById = (id, updatedData) => {
  const expenses = readData();
  const index = expenses.findIndex((e) => e.id === parseInt(id));

  if (index === -1) {
    throw new Error(`Expense with ID ${id} not found`);
  }

  expenses[index] = {
    ...expenses[index],
    ...updatedData,
    id: expenses[index].id,
  };

  writeData(expenses);
  return expenses[index];
};

const deleteExpenseById = (id) => {
  const expenses = readData();
  const index = expenses.findIndex((e) => e.id === parseInt(id));
  if (index !== -1) {
    expenses.splice(index, 1);
    writeData(expenses);
  }
};

export default {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpenseById,
  deleteExpenseById,
};
