const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    productName:String,
    productSize:Number,
    productImage:String,
    productAvailable:Number,
    productSection:String,
    productPrice:Number,
 })

module.exports = mongoose.model("cart",cartSchema);