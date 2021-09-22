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

// A SINGLE PRODUCT CREATION IN MONGO
// const p = new Product({
//   name: "Bartlett Pear",
//   price: 0.65,
//   category: "Fruit",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log("error");
//     console.log(err);
//   });

const seedProducts = [
  {
    name: "Bartlett Pear",
    price: 0.65,
    category: "Fruit",
  },
  {
    name: "White Seedless Grapes",
    price: 2.5,
    category: "Fruit",
  },
  {
    name: "Broccoli",
    price: 2.0,
    category: "Vegetable",
  },
  {
    name: "Green Beans",
    price: 1.5,
    category: "Vegetable",
  },
  {
    name: "Water Melon",
    price: 3.5,
    category: "Fruit",
  },
  {
    name: "Eggs",
    price: 1.0,
    category: "Dairy",
  },
  {
    name: "Salted Butter",
    price: 1.5,
    category: "Dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
