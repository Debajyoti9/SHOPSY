const ordersController = require("../Controllers/orders.controller");
const express = require("express");
const router = express.Router();

router.post("/create-order", ordersController.createOrderController);

router.get("/get-razorpay-key", ordersController.getRazorPayKeyController);

router.post("/pay-order", ordersController.payOrderController);

router.get("/list-orders", ordersController.listOrdersController);

module.exports = router;
