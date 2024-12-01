import { Router } from 'express';
import expenseService from '../services/expenseService.js';

const router = Router();

router.get('/', (req, res) => {
  const expenses = expenseService.getAllExpenses();
  res.render('index', { expenses });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/', (req, res) => {
  const { title, amount, date } = req.body;
  expenseService.createExpense({ title, amount, date });
  res.redirect('/expenses');
});

router.get('/:id/edit', (req, res) => {
  const expense = expenseService.getExpenseById(req.params.id);
  res.render('update', { expense });
});

router.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { title, amount, date } = req.body;

  try {
    expenseService.updateExpenseById(id, { title, amount, date });
    res.redirect('/expenses');
  } catch (error) {
    res.status(404).render('error', { error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  expenseService.deleteExpenseById(req.params.id);
  res.redirect('/expenses');
});

router.get('/:id', (req, res) => {
  const expense = expenseService.getExpenseById(req.params.id);
  res.render('details', { expense });
});

export default router;
