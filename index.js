
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working


const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shahbaz", (req, res) => {
    res.send("Hello shahbaz!");
  });


  app.get("/login", (req, res) => {
    res.send('<h1>please login kr lay bahi</h1>');
  });
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
