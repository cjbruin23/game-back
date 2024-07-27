import { Request, Response } from "express";

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
}
app.use(cors(corsOptions))

//
app.use(bodyParser.json())


// ROUTES
app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

router.post('/player', (request: Request, response: Response) => {
  console.log('request', request.body)
  response.status(200).send("Hello World");
});

app.use(router)


// SERVER START
const PORT = process.env.PORT;
app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error: any) => {
  // gracefully handle error
  throw new Error(error.message);
})