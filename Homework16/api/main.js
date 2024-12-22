const { Router } = require("express");
const expensesRouter = require("./expenses/expenses.route");
const usersRouter = require("./users/users.route");

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.send("this is api route");
});

apiRouter.use("/expenses", expensesRouter);
apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
