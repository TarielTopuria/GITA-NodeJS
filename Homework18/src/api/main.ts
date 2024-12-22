import { Router, Request, Response } from "express";
import expensesRouter from "../api/expenses/expenses.route";
import usersRouter from "../api/users/users.route";

const apiRouter = Router();

apiRouter.get("/", (req: Request, res: Response) => {
  res.send("this is api route");
});

apiRouter.use("/expenses", expensesRouter);
apiRouter.use("/users", usersRouter);

export default apiRouter;
