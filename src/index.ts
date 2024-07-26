import { Request, Response } from "express";

const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')

// configures dotenv to work in your application
dotenv.config();
const app = express();

//CORS
const corsOptions = {
  origin: ['http://localhost:5173']
}
app.use(cors(corsOptions))


// ROUTES
app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.post('/player', (request: Request, response: Response) => {
  console.log('request', request)
  response.status(200).send("Hello World");
});


// SERVER START
const PORT = process.env.PORT;
app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error: any) => {
  // gracefully handle error
  throw new Error(error.message);
})