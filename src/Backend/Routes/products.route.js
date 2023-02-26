const productController = require("../Controllers/products.controller");

module.exports = function (app) {
  app
    .get("/products", productController.getProducts)
    .post("/products", productController.addProducts);
  app
    .get("/products/:id/:status", productController.getApprovedProducts)
    .post("/products/:id/:status", productController.updateProductStatus);
  app.get("/products/men", productController.getMenProducts);
  app.get("/products/women", productController.getWomenProducts);
  app.get("/products/baby", productController.getBabyProducts);
  app.get("products/trending", productController.getTrendingProducts);
};
