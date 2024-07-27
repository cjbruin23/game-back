"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const player_1 = __importDefault(require("./routes/player"));
const cors = require('cors');
// configures dotenv to work in your application
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOptions = {
    origin: ['http://localhost:5173']
};
app.use(cors(corsOptions));
app.use(body_parser_1.default.json());
// ROUTES
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
const playerRouter = (0, player_1.default)();
app.use(playerRouter);
// SERVER START
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
