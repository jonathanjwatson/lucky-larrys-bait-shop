const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Product.create(req.body).then((newProduct) => {
    console.log(newProduct);
    res.json(newProduct);
  });
});

module.exports = router;
