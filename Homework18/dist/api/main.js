"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenses_route_1 = __importDefault(require("../api/expenses/expenses.route"));
const users_route_1 = __importDefault(require("../api/users/users.route"));
const apiRouter = (0, express_1.Router)();
apiRouter.get("/", (req, res) => {
    res.send("this is api route");
});
apiRouter.use("/expenses", expenses_route_1.default);
apiRouter.use("/users", users_route_1.default);
exports.default = apiRouter;
