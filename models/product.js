const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter a product title",
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: "Enter a product price",
  },
  imageURL: {
    type: String,
    trim: true,
    required: "Enter a product image URL",
  },
  category: {
    type: String,
    trim: true,
    required: "Enter a product category",
  },
  quantity: {
    type: Number,
    required: "Enter an quantity",
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Transaction", productSchema);

module.exports = Product;
