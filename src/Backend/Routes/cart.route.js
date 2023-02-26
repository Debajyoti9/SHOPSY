const cartController = require("../Controllers/cart.controller");

module.exports = function (app) {
  app.get("/cartItems", cartController.getCartItemsController);
  app
    .get("/cartItems/:id", cartController.getCartItemController)
    .post("/cartItems/:id", cartController.addToCartController)
    .post("/cartItems/:id", cartController.deleteCartItems);
};
