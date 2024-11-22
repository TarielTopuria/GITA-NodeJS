import { Router } from 'express';
import expenseController from '../controllers/expenseController.js';
import validateRequiredFields from '../middlewares/validateRequiredFields.js';
import checkDeleteAuthorization from '../middlewares/checkDeleteAuthorization.js';
import randomRequestMiddleware from '../middlewares/randomRequestMiddleware.js';

const {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
} = expenseController;

const router = Router();

router.get('/random', randomRequestMiddleware, (req, res) => {
  res.status(200).json({ message: 'Request passed!' });
});

router.get('/', getExpenses);
router.get('/:id', getExpenseById);
router.post('/', validateRequiredFields, createExpense);
router.put('/:id', updateExpense);
router.delete('/:id', checkDeleteAuthorization, deleteExpense);

export default router;
