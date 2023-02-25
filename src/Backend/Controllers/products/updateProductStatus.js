/* eslint-disable import/no-anonymous-default-export */
const Product = require("../../Models/Product");
module.exports = function (req, res) {
  Product.updateOne(
    { _id: req.params.id },
    { approved: req.params.status },
    (err) => {
      if (!err) {
        res.send("Product status updated successfully");
      }
    }
  );
};
