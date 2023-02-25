const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const productRouter = require("./Routes/products.route");
const cartRouter = require("./Routes/cart.route");
const ordersRouter = require("./Routes/orders.route");

const app = express();

//environment variable
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

//available local file in js
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//connect with mongoDB
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/vendorDB");

//routing
app.use("/products", productRouter);
app.use("/products/:id/:status", productRouter);
app.use("/products/men", productRouter);
app.use("/products/women", productRouter);
app.use("/products/baby", productRouter);
app.use("products/trending", productRouter);
app.use("/cartItems", cartRouter);
app.use("/cartItems/:id", cartRouter);
app.use("/create-order", ordersRouter);
app.use("/get-razorpay-key", ordersRouter);
app.use("/pay-order", ordersRouter);
app.use("/list-orders", ordersRouter);

//connect to PORT
const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
  console.log(`App is running on port ${port}`);
});
