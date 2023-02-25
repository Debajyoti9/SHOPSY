/* eslint-disable import/no-anonymous-default-export */
const Product = require("../../Models/Product");
module.exports = function (req, res) {
  const sizeArr = [];
  sizeArr.push(req.body.sizeOfProduct);
  const newProduct = new Product({
    productName: req.body.productName,
    productAvailable: req.body.productAvailable,
    sizeOfProduct: sizeArr,
    priceOfProduct: req.body.priceOfProduct,
    productImage: req.body.productImage,
    productDetails: req.body.productDetails,
    sectionOfProduct: req.body.sectionOfProduct,
    approved: "pending",
  });
  newProduct.save((err) => {
    err ? res.send(err) : res.send("Successfully Added the new product");
  });
};
