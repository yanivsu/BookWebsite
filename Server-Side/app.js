const express = require("express");
const fs = require("fs");
const Path = require("path");

var app = express();
var cors = require("cors");

const port = 8000;

// Cores for localHost
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.end(`<h1>Hello from Yaniv Suriyano server...</h1>`);
});

app.put("/addLine", function (req, res) {
  console.log(`get new line to add...`);


process.on("uncaughtException", function (err) {
  console.log(`Error => ${err} \n Server still alive =) ...`);
});
