"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpense = exports.deleteExpense = exports.createExpense = exports.getExpenseById = exports.getAllExpenses = void 0;
const expense_model_1 = __importDefault(require("../../models/expense.model"));
const mongoose_1 = require("mongoose");
const getAllExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, take = 20 } = req.query;
    take = Math.min(Number(take), 20);
    const response = yield expense_model_1.default
        .find()
        .skip((Number(page) - 1) * take)
        .limit(take)
        .sort({ createdAt: -1 });
    res.status(200).json(response);
});
exports.getAllExpenses = getAllExpenses;
const getExpenseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        res.status(400).json({ message: "Id format is incorrect" });
        return;
    }
    const expense = yield expense_model_1.default.findById(id);
    if (!expense) {
        res.status(404).json({ message: "Expense not found!", data: null });
        return;
    }
    res.status(200).json(expense);
});
exports.getExpenseById = getExpenseById;
const createExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, cost, quantity } = req.body;
    if (!type || !cost) {
        res.status(400).json({ message: `type and cost are required`, data: null });
        return;
    }
    const newExpense = yield expense_model_1.default.create({ type, cost, quantity });
    res.status(201).json({ message: `Expenses created successfully`, data: newExpense });
});
exports.createExpense = createExpense;
const deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        res.status(400).json({ message: "Id format is incorrect" });
        return;
    }
    const deletedExpense = yield expense_model_1.default.findByIdAndDelete(id);
    if (!deletedExpense) {
        res.status(404).json({ message: "Expense not found" });
        return;
    }
    res.status(200).json({ message: `Expense deleted successfully`, data: deletedExpense });
});
exports.deleteExpense = deleteExpense;
const updateExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        res.status(400).json({ message: "Id format is incorrect" });
        return;
    }
    const updatedExpense = yield expense_model_1.default.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (!updatedExpense) {
        res.status(404).json({ message: "Expense not found" });
        return;
    }
    res.status(200).json({ message: `Expense updated successfully`, data: updatedExpense });
});
exports.updateExpense = updateExpense;
