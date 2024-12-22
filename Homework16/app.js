const express = require("express");
const cors = require("cors");
const apiRouter = require("./api/main");
const logger = require("./middlewares/logger.middlware");
const connectDb = require("./db/db");

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(logger);

app.use(cors());
app.use(express.json());
connectDb();

app.use("/api", apiRouter);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
