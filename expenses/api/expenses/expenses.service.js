const expenses = [
  { id: 1, type: "dinner", cost: 70, quantity: 1 },
  { id: 2, type: "lunch", cost: 30, quantity: 1 },
];

const getAllExpenses = (req, res) => {
  let { page = 1, take = 20 } = req.query;
  take > 20 ? (take = 20) : take;

  let response = expenses.slice((page - 1) * take, take * page);
  res.render("pages/expenses/expenses.home.ejs", { response });

};

const getExpenseById = (req, res) => {
  const { id } = req.params;
  const expense = expenses.find((x) => x.id === Number(id));

  if (!expense) {
    return res.status(404).json({ message: "Expense not found!", data: null });
  }

  res.render("pages/expenses/expenses.details.ejs", { expense });
};

const createExpense = (req, res) => {
  const { type, cost, quantity } = req.body;

  if (!type || !cost) {
    return res
      .status(400)
      .json({ message: `type and cost are required`, data: null });
  }

  const lastId = expenses[expenses.length - 1]?.id || 0;
  const newExpense = {
    id: lastId+1,
    type,
    cost,
    quantity,
  };

  expenses.push(newExpense);

  res
    .status(201)
    .json({ message: `Expenses created successfully`, data: newExpense });
};

const deleteExpense = (req, res) => {
  const { id } = req.params;

  const index = expenses.findIndex((x) => x.id === Number(id));

  if (index === -1) {
    return res.status(400).json({ message: `Expense not found!`, data: null });
  }

  const deletedExpense = expenses.splice(index, 1);
  res.json({
    message: `Expense deleted successfully`,
    data: null,
  });
};

const updateExpense = (req, res) => {
  const { id } = req.params;
  const { type, cost, quantity } = req.body;
  const index = expenses.findIndex((x) => x.id === Number(id));

  if (index === -1) {
    return res
      .status(400)
      .json({ message: `Expense not found`, data: null });
  }

  if (type) expenses[index].type = type;
  if (cost) expenses[index].cost = cost;
  if (quantity) expenses[index].quantity = quantity;

  res.json({
    message: `Expense updated successfully`,
    data: expenses[index],
  });
};


const findExistingExpense = (id) => expenses.find((expense) => expense.id === Number(id));

const addExpense = (req, res) => {
  res.render("pages/expenses/expenses.add.ejs");
};

const putExpense = (req, res) => {
  const { id } = req.params;
  const expense = findExistingExpense(id);

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
  putExpense
};
