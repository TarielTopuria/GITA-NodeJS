const { Router } = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  addUser,
  putUser,
} = require("./users.service");
const authMiddlware = require("../../middlewares/auth.middlware");

const usersRouter = Router();

usersRouter.get("/", getAllUser);

usersRouter.get("/add", addUser);

usersRouter.get("/putUser/:id", putUser);

usersRouter.get("/:id", getUserById);

usersRouter.post("/", createUser);

usersRouter.delete("/:id", authMiddlware, deleteUser);

usersRouter.put("/:id", updateUser);

module.exports = usersRouter;
