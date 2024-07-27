require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");


const dbController = require("./dbModel/dbController.js")


const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json(),(req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Signup endpoint
app.post("/signup",dbController.signup);
app.post("/icreate",dbController.icreate);
app.post("/product",dbController.product);
app.get("/getProduct",dbController.getProduct);
app.get("/getAllProducts",dbController.getAllProducts);
app.get("/getInvoiceByNumber",dbController.getInvoiceByNumber);

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
