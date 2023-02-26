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
productRouter(app);
cartRouter(app);
ordersRouter(app);

//connect to PORT
const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
  console.log(`App is running on port ${port}`);
});
