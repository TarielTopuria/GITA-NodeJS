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
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserById = exports.getAllUser = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const mongoose_1 = require("mongoose");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, take = 20 } = req.query;
    take = Math.min(Number(take), 20);
    const response = yield user_model_1.default
        .find()
        .skip((Number(page) - 1) * take)
        .limit(take)
        .sort({ createdAt: -1 });
    res.status(200).json(response);
});
exports.getAllUser = getAllUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        res.status(400).json({ message: "Id format is incorrect" });
        return;
    }
    const user = yield user_model_1.default.findById(id);
    if (!user) {
        res.status(404).json({ message: "User not found!", data: null });
        return;
    }
    res.status(200).json(user);
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, age, email, description } = req.body;
    if (!firstName || !lastName || !email) {
        res.status(400).json({ message: `firstName, lastName and email are required`, data: null });
        return;
    }
    const newUser = yield user_model_1.default.create({ firstName, lastName, age, email, description });
    res.status(201).json({ message: `User created successfully`, data: newUser });
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        res.status(400).json({ message: "Id format is incorrect" });
        return;
    }
    const deletedUser = yield user_model_1.default.findByIdAndDelete(id);
    if (!deletedUser) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.status(200).json({ message: `User deleted successfully`, data: deletedUser });
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        res.status(400).json({ message: "Id format is incorrect" });
        return;
    }
    const updatedUser = yield user_model_1.default.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (!updatedUser) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.status(200).json({ message: `User updated successfully`, data: updatedUser });
});
exports.updateUser = updateUser;
