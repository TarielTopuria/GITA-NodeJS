import fileOperations from '../utils/fileOperations.js';
const { readData, writeData } = fileOperations;

const getExpenses = (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const expenses = readData();
    const start = (page - 1) * limit;
    const paginatedExpenses = expenses.slice(start, start + parseInt(limit));

    res.status(200).json({
      page: parseInt(page),
      limit: parseInt(limit),
      total: expenses.length,
      data: paginatedExpenses,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching expenses' });
  }
};

const getExpenseById = (req, res) => {
  try {
    const { id } = req.params;
    const expenses = readData();
    const expense = expenses.find((e) => e.id === parseInt(id));

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

const createExpense = (req, res) => {
  try {
    const { title, amount, date } = req.body;

    if (!title || !amount || !date) {
      return res
        .status(400)
        .json({ error: 'Title, amount, and date are required' });
    }

    const expenses = readData();
    const newExpense = { id: Date.now(), title, amount, date };
    expenses.push(newExpense);
    writeData(expenses);

    res.status(201).json(newExpense);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while creating the expense' });
  }
};

const updateExpense = (req, res) => {
  console.log('comes in controller');
  try {
    const { id } = req.params;
    const { title, amount, date } = req.body;

    const expenses = readData();
    const expenseIndex = expenses.findIndex((e) => e.id === parseInt(id));

    console.log('comes in controller 2');
    if (expenseIndex === -1) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    console.log('comes in controller3');

    const updatedExpense = {
      ...expenses[expenseIndex],
      ...(title && { title }),
      ...(amount && { amount }),
      ...(date && { date }),
    };

    console.log('comes in controller4');
    expenses[expenseIndex] = updatedExpense;
    writeData(expenses);

    res.status(200).json(updatedExpense);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while updating the expense' });
  }
};

const deleteExpense = (req, res) => {
  try {
    const { id } = req.params;
    const authKey = req.headers.authorization;

    const validKey = 'admin123';
    if (authKey !== validKey) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const expenses = readData();
    const expenseIndex = expenses.findIndex((e) => e.id === parseInt(id));

    if (expenseIndex === -1) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    expenses.splice(expenseIndex, 1);
    writeData(expenses);

    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the expense' });
  }
};

export default {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
};
