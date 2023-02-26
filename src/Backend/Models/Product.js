const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productAvailable: Number,
  sizeOfProduct: Array,
  priceOfProduct: Number,
  productImage: String,
  productDetails: String,
  sectionOfProduct: String,
  approved: String,
});

module.exports = mongoose.model("Product", productSchema);
