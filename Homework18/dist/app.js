"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const main_1 = __importDefault(require("./api/main"));
const logger_middlware_1 = __importDefault(require("./middlewares/logger.middlware"));
const db_1 = __importDefault(require("./db/db"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express_1.default.static("public"));
app.use(logger_middlware_1.default);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.default)();
app.use("/api", main_1.default);
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
    }
    else {
        console.error("Error occurred, server can't start", error);
    }
});
