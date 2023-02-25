/* eslint-disable import/no-anonymous-default-export */
// import Order from '../../Models/Order';
const Razorpay = require("razorpay");
module.exports = async function (req, res) {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error occurred");
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};
