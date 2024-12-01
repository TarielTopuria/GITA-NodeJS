import express from 'express';
import expenseRoutes from './routes/expenseRoutes.js';
import path from 'path';
import methodOverride from 'method-override';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

app.use(express.static(path.join(path.resolve(), 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));
app.use('/expenses', expenseRoutes);

app.use((err, req, res, next) => {
  res.status(500).render('error', { error: 'Internal Server Error' });
});

export default app;
