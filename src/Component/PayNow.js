import React,{useState} from 'react';
import './Style/PayNow.css';
import axios from 'axios';
function PayNow({orderAmount,allIds}) {
    const [loading, setLoading] = useState(false);
    function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
          alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
          try {
            setLoading(true);
            const result = await axios.post('http://localhost:4000/create-order', {
              amount: orderAmount + '00',
            });
            const { amount, id: order_id, currency } = result.data;
            const {
              data: { key: razorpayKey },
            } = await axios.get('http://localhost:4000/get-razorpay-key');
    
            const options = {
              key: razorpayKey,
              amount: amount.toString(),
              currency: currency,
              name: 'example name',
              description: 'example transaction',
              order_id: order_id,
              handler: async function (response) {
                const result = await axios.post('http://localhost:4000/pay-order', {
                  amount: amount,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                });
                alert(result.data.msg);
                // fetchOrders();
              },
              prefill: {
                name: 'example name',
                email: 'email@example.com',
                contact: '111111',
              },
              notes: {
                address: 'example address',
              },
              theme: {
                color: '#80c0f0',
              },
            };
    
            setLoading(false);
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          } catch (err) {
            alert(err);
            setLoading(false);
          }
        };
        document.body.appendChild(script);
      }

  return (
      <div className="pay_now">
         <button disabled={loading} onClick={loadRazorpay}>Pay Now</button>
     </div>
  )
}

export default PayNow;