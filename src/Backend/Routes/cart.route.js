const cartController = require("../Controllers/cart.controller");
const express = require("express");
const router = express.Router();

router.post("/cartItems/:id", cartController.addToCartController);
router.get("/cartItems", cartController.getCartItemsController);
router.get("/cartItems/:id", cartController.getCartItemController);
router.post("/cartItems/:id", cartController.deleteCartItems);

module.exports = router;
