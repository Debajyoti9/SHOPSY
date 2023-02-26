const ordersController = require("../Controllers/orders.controller");
module.exports = function (app) {
  app.post("/create-order", ordersController.createOrderController);
  app.get("/get-razorpay-key", ordersController.getRazorPayKeyController);
  app.post("/pay-order", ordersController.payOrderController);
  app.get("/list-orders", ordersController.listOrdersController);
};
