const addProducts = require("./products/addProducts");
const getApprovedProducts = require("./products/getApprovedProducts");
const getBabyProducts = require("./products/getBabyproducts");
const getMenProducts = require("./products/getMenProducts");
const getTrendingProducts = require("./products/getTrendingProducts");
const getWomenProducts = require("./products/getWomenProducts");
const getProducts = require("./products/getProducts");
const updateProductStatus = require("./products/updateProductStatus");

const productsController = {
  addProducts,
  getProducts,
  getApprovedProducts,
  getBabyProducts,
  getMenProducts,
  getTrendingProducts,
  getWomenProducts,
  updateProductStatus,
};

module.exports = productsController;
