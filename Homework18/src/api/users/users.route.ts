import { Router } from "express";
import {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser
} from "../users/users.service";
import authMiddleware from "../../middlewares/auth.middlware";

const usersRouter = Router();

usersRouter.get("/", getAllUser);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUser);
usersRouter.delete("/:id", authMiddleware, deleteUser);
usersRouter.put("/:id", updateUser);

export default usersRouter;
