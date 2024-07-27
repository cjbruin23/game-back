"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const getPlayerRoutes = () => {
    const router = express.Router();
    router.post('/player', (request, response) => {
        console.log('request', request.body);
        response.status(200).send("Hello World");
    });
    return router;
};
exports.getPlayerRoutes = getPlayerRoutes;
