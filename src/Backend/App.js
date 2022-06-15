const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Razorpay = require('razorpay');

const app = express();

//environment variable
dotenv.config()

//middlewares
app.use(express.json());
app.use(cors());

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017/vendorDB');

const productSchema = new mongoose.Schema({
    productName:String,
    productAvialable:Number,
    sizeOfProduct:Array,
    priceOfProduct:Number,
    productImage:String,
    productDetails:String,
    sectionOfProduct:String,
    approved: String,
})

const cartSchema = new mongoose.Schema({
   productName:String,
   productSize:Number,
   productImage:String,
   productAvialable:Number,
   productSection:String,
   productPrice:Number,
})

const Product = mongoose.model('Product',productSchema);

const Cart = mongoose.model('Cart',cartSchema);

app.route("/products")
.get((req,res)=>{
    Product.find({},(err,foundProducts)=>{
        err?res.send(err):res.send(foundProducts);
    })
})
.post((req,res)=>{
    const sizeArr=[];
    sizeArr.push(req.body.sizeOfProduct);
    const newProduct = new Product({
        productName:req.body.productName,
        productAvialable:req.body.productAvialable,
        sizeOfProduct:sizeArr,
        priceOfProduct:req.body.priceOfProduct,
        productImage: req.body.productImage,
        productDetails:req.body.productDetails,
        sectionOfProduct:req.body.sectionOfProduct,
        approved: 'pending',
    })
    newProduct.save((err)=>{
        (err)?res.send(err):res.send("Successfully Added the new product");
    })
})

app.route("/products/:id/:status")
// .get((req,res)=>{
//     Product.findOne({_id:req.params.id},(err,foundProduct)=>{
//         if(!foundProduct){
//             res.send("No Product Found!");
//         }
//         else if(err){
//             res.send(err);
//         }
//         else{
//             res.send(foundProduct);
//         }
//     })
// })
.post((req,res)=>{
    Product.updateOne({_id:req.params.id},{approved:req.params.status},(err)=>{
        if(!err){
            res.send('Product status updated successfully');
        }
    })
})

app.route("/products/approved")
.get((req,res)=>{
   Product.find({ approved: 'Approved'},(err,foundProducts)=>{
    err?res.send(err):res.send(foundProducts);
   })
})
app.route("/products/men")
.get((req,res)=>{
    Product.find({ approved: 'Approved',sectionOfProduct:"men"},(err,foundProducts)=>{
        err?res.send(err):res.send(foundProducts);
    })
})

app.route("/products/women")
.get((req,res)=>{
    Product.find({ approved: 'Approved',sectionOfProduct:"women"},(err,foundProducts)=>{
        err?res.send(err):res.send(foundProducts);
    })
})

app.route("/products/baby")
.get((req,res)=>{
    Product.find({ approved: 'Approved',sectionOfProduct:"baby"},(err,foundProducts)=>{
        err?res.send(err):res.send(foundProducts);
    })
})

app.route("/products/trending")
.get((req,res)=>{
    Product.find({ approved: 'Approved',sectionOfProduct:"trending"},(err,foundProducts)=>{
        err?res.send(err):res.send(foundProducts);
    })
})

app.route("/products/:id")
.get((req,res)=>{
    Product.findOne({_id:req.params.id},(err,foundProduct)=>{
        if(!foundProduct){
            res.send("No Product Found!");
        }
        else if(err){
            res.send(err);
        }
        else{
            res.send(foundProduct);
        }
    })
})
.post((req,res)=>{
    Product.findOne({_id:req.params.id},(err,foundProduct)=>{
        if(!foundProduct){
            res.send("No Product Found!");
        }
        else if(err){
            res.send(err);
        }
        else{
          const cartProduct = new Cart({
            productName:foundProduct.productName,
            productSize:req.body.sizeOfProduct,
            productImage:foundProduct.productImage,
            productAvialable:foundProduct.productAvialable,
            productSection:foundProduct.sectionOfProduct,
            productPrice:foundProduct.priceOfProduct
          })
          cartProduct.save((err)=>{
            (err)?res.send(err):res.send("Successfully Added to the cart");
          })
        }
    })
})

app.route("/cartItems")
.get((req,res)=>{
    Cart.find({},(err,foundProducts)=>{
        err?res.send(err):res.send(foundProducts);
    })
})

app.route("/cartItems/:id")
.get((req,res)=>{
    Cart.find({_id:req.params.id},(err,foundItems)=>{
        res.send(foundItems);
    })
})
.post((req,res)=>{
    Cart.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            res.send("Unable to Delete")
        }
        else{
            res.send("Deleted Sucessfully!");
        }
    })
})


//Payment Intregartion 
const OrderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
      orderId: String,
      paymentId: String,
      signature: String,
    },
  });
  const Order = mongoose.model('Order', OrderSchema);
  
  app.get('/get-razorpay-key', (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
  });
  
  app.post('/create-order', async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const options = {
        amount: req.body.amount,
        currency: 'INR',
      };
      const order = await instance.orders.create(options);
      if (!order) return res.status(500).send('Some error occured');
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.post('/pay-order', async (req, res) => {
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
        msg: 'Payment was successfull',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  
  app.get('/list-orders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  });

const port = process.env.PORT || 4000;

app.listen(port,(req,res)=>{
    console.log(`App is running on port ${port}`);
})