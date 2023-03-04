/* eslint-disable import/no-anonymous-default-export */
const Product = require("../../Models/Product");
module.exports = function (req, res) {
  Product.findOne({ _id: req.params.id }, (err, foundProduct) => {
    if (!foundProduct) {
      res.send("No Product Found!");
    } else if (err) {
      res.send(err);
    } else {
      res.send(foundProduct);
    }
  });
};
