/* eslint-disable import/no-anonymous-default-export */
const Cart = require("../../Models/Cart");

module.exports = function (req, res) {
  Cart.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.send("Unable to Delete");
    } else {
      res.send("Deleted Successfully!");
    }
  });
};
