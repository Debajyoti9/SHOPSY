/* eslint-disable import/no-anonymous-default-export */
const Product = require("../../Models/Product");
module.exports = function (req, res) {
  Product.find({}, (err, foundProducts) => {
    err ? res.send(err) : res.send(foundProducts);
  });
};
