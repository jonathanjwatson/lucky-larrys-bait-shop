const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).end();
    });
});

module.exports = router;
