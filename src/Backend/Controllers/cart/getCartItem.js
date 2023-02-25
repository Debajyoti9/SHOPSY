/* eslint-disable import/no-anonymous-default-export */
const Cart = require("../../Models/Cart");

module.exports = function (req, res) {
  Cart.find({ _id: req.params.id }, (err, foundItems) => {
    res.send(foundItems);
  });
};
