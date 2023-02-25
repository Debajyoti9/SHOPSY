/* eslint-disable import/no-anonymous-default-export */
const Cart = require("../../Models/Cart");

module.exports = function (req, res) {
  Cart.find({}, (err, foundProducts) => {
    err ? res.send(err) : res.send(foundProducts);
  });
};
