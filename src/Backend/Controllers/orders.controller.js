const createOrderController = require("./orders/createOrder");
const getRazorPayKeyController = require("./orders/getRazorPayKey");
const listOrdersController = require("./orders/listOrders");
const payOrderController = require("./orders/payOrder");

const ordersController = {
  createOrderController,
  getRazorPayKeyController,
  listOrdersController,
  payOrderController,
};

module.exports = ordersController;
