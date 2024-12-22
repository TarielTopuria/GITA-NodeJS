"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers["api-key"];
    const rolesHeader = req.headers["role"];
    if ((!apiKey || apiKey !== "12345") &&
        (!rolesHeader || !rolesHeader.includes("admin") || !rolesHeader.includes("editor"))) {
        res.status(401).json({ message: "Forbidden", data: null });
        return;
    }
    next();
};
exports.default = authMiddleware;
