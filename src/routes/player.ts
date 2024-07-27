import { Request, Response } from "express";

const express = require("express");

const getPlayerRoutes = () => {
    const router = express.Router();

    router.post('/player', (request: Request, response: Response) => {
        console.log('request', request.body)
        response.status(200).send("Hello World");
      });
      return router;
}

exports.getPlayerRoutes = getPlayerRoutes;