import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import apiRouter from "./api/main";
import logger from "./middlewares/logger.middlware";
import connectDb from "./db/db";

const app: Application = express();
const PORT: number = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(logger);
app.use(cors());
app.use(express.json());

connectDb();

app.use("/api", apiRouter);

app.listen(PORT, (error?: Error) => {
  if (!error) {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`
    );
  } else {
    console.error("Error occurred, server can't start", error);
  }
});
