import express from 'express';
import path from 'path';
import expenseRoutes from './routes/expenseRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectToDatabase from './utils/database.js';

const app = express();

connectToDatabase();

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

app.use(express.static(path.join(path.resolve(), 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/expenses', expenseRoutes);
app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { error: 'Internal Server Error' });
});

export default app;
