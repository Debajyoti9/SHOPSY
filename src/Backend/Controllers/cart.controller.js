const addToCartController = require("./cart/addToCart");
const getCartItemController = require("./cart/getCartItem");
const getCartItemsController = require("./cart/getCartItems");
const deleteCartItems = require("./cart/deleteCartItems");
const getProductInCart = require("./products/getProduct");

const cartController = {
  addToCartController,
  getCartItemController,
  getCartItemsController,
  deleteCartItems,
  getProductInCart,
};

module.exports = cartController;
