/* eslint-disable import/no-anonymous-default-export */
const Product = require("../../Models/Product");
module.exports = function (req, res) {
  Product.find(
    { approved: "Approved", sectionOfProduct: "men" },
    (err, foundProducts) => {
      err ? res.send(err) : res.send(foundProducts);
    }
  );
};