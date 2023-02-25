/* eslint-disable import/no-anonymous-default-export */
const Product = require("../../Models/Product");
const Cart = require("../../Models/Cart");
module.exports = function (req, res) {
  Product.findOne({ _id: req.params.id }, (err, foundProduct) => {
    if (!foundProduct) {
      res.send("No Product Found!");
    } else if (err) {
      res.send(err);
    } else {
      const cartProduct = new Cart({
        productName: foundProduct.productName,
        productSize: req.body.sizeOfProduct,
        productImage: foundProduct.productImage,
        productAvailable: foundProduct.productAvailable,
        productSection: foundProduct.sectionOfProduct,
        productPrice: foundProduct.priceOfProduct,
      });
      cartProduct.save((err) => {
        err ? res.send(err) : res.send("Successfully Added to the cart");
      });
    }
  });
};
