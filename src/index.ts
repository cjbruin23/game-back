import { Request, Response } from "express";

import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import getPlayerRoutes from './routes/player';

const cors = require('cors');

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


const playerRouter = getPlayerRoutes();

app.use(playerRouter);


// SERVER START
const PORT = process.env.PORT;
app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error: any) => {
  throw new Error(error.message);
})