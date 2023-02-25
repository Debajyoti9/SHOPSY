const Order = require("../../Models/Order");
// eslint-disable-next-line import/no-anonymous-default-export
module.exports = async function (req, res) {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body;
    const newOrder = Order({
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newOrder.save();
    res.send({
      msg: "Payment is successful:)",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
