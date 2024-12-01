import { Router } from 'express';
import Expense from '../models/Expense.js';

const router = Router();

router.get('/', async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const options = {
    page: Math.max(1, parseInt(page)),
    limit: Math.min(20, Math.max(1, parseInt(limit))),
  };
  const expenses = await Expense.find()
    .skip((options.page - 1) * options.limit)
    .limit(options.limit);
  res.render('index', { expenses });
});

router.get('/:id', async (req, res) => {
  const expense = await Expense.findById(req.params.id);
  if (!expense)
    return res.status(404).render('error', { error: 'Expense not found' });
  res.render('details', { expense });
});

router.post('/', async (req, res) => {
  const { title, amount, date } = req.body;
  const newExpense = new Expense({ title, amount, date });
  await newExpense.save();
  res.redirect('/expenses');
});

router.post('/update/:id', async (req, res) => {
  const { title, amount, date } = req.body;
  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    { title, amount, date },
    { new: true }
  );
  if (!updatedExpense)
    return res.status(404).render('error', { error: 'Expense not found' });
  res.redirect('/expenses');
});

router.post('/delete/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.redirect('/expenses');
});

export default router;
