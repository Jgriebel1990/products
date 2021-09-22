const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((e) => {
    console.log("Mongo Connection Error");
    console.log(e);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dog", (req, res) => {
  res.send("woof");
});

app.listen(3000, () => {
  console.log("Application is up and running.");
});
