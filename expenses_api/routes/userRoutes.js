import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

router.get('/', async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const options = {
    page: Math.max(1, parseInt(page)),
    limit: Math.min(20, Math.max(1, parseInt(limit))),
  };
  const users = await User.find()
    .skip((options.page - 1) * options.limit)
    .limit(options.limit);
  res.render('users', { users });
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).render('error', { error: 'User not found' });
  res.render('userDetails', { user });
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.redirect('/users');
});

router.post('/update/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, password },
    { new: true }
  );
  if (!updatedUser)
    return res.status(404).render('error', { error: 'User not found' });
  res.redirect('/users');
});

router.post('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/users');
});

export default router;
