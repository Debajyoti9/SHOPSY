const Order = require("../../Models/Order");
// eslint-disable-next-line import/no-anonymous-default-export
module.exports = async function (req, res) {
  const orders = await Order.find();
  res.send(orders);
};
