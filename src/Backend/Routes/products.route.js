const productController = require("../Controllers/products.controller");
const express = require("express");
const router = express.Router();

router.get("/products", productController.getProducts);
router.post("/products", productController.addProducts);
router.post("/products/:id/:status", productController.updateProductStatus);
router.get("/products/:id/:status", productController.getApprovedProducts);
router.get("/products/men", productController.getMenProducts);
router.get("/products/women", productController.getWomenProducts);
router.get("/products/baby", productController.getBabyProducts);
router.get("products/trending", productController.getTrendingProducts);

module.exports = router;
