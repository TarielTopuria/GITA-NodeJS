"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_service_1 = require("../users/users.service");
const auth_middlware_1 = __importDefault(require("../../middlewares/auth.middlware"));
const usersRouter = (0, express_1.Router)();
usersRouter.get("/", users_service_1.getAllUser);
usersRouter.get("/:id", users_service_1.getUserById);
usersRouter.post("/", users_service_1.createUser);
usersRouter.delete("/:id", auth_middlware_1.default, users_service_1.deleteUser);
usersRouter.put("/:id", users_service_1.updateUser);
exports.default = usersRouter;
