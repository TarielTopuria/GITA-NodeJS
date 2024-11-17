import express from "express";
import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();

app.use(express.json());

app.use("/expenses", expenseRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
