"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenses_service_1 = require("./expenses.service");
const auth_middlware_1 = __importDefault(require("../../middlewares/auth.middlware"));
const expensesRouter = (0, express_1.Router)();
expensesRouter.get("/", expenses_service_1.getAllExpenses);
expensesRouter.get("/:id", expenses_service_1.getExpenseById);
expensesRouter.post("/", expenses_service_1.createExpense);
expensesRouter.delete("/:id", auth_middlware_1.default, expenses_service_1.deleteExpense);
expensesRouter.put("/:id", expenses_service_1.updateExpense);
exports.default = expensesRouter;
