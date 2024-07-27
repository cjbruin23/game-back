"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
// configures dotenv to work in your application
dotenv.config();
const app = express();
const router = express.Router();
//CORS
const corsOptions = {
    origin: ['http://localhost:5173']
};
app.use(cors(corsOptions));
//
app.use(bodyParser.json());
// ROUTES
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
router.post('/player', (request, response) => {
    console.log('request', request.body);
    response.status(200).send("Hello World");
});
app.use(router);
// SERVER START
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
