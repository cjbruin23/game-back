import { Request, Response } from "express";

const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/player');

// configures dotenv to work in your application
dotenv.config();
const app = express();

const corsOptions = {
  origin: ['http://localhost:5173']
}
app.use(cors(corsOptions))
app.use(bodyParser.json())


// ROUTES
app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 


const playerRouter = playerRoutes.getPlayerRoutes();

app.use(playerRouter);


// SERVER START
const PORT = process.env.PORT;
app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error: any) => {
  throw new Error(error.message);
})