// eslint-disable-next-line import/no-anonymous-default-export
module.exports = function (res) {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
};
