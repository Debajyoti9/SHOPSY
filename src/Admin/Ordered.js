import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Ordered() {
  const [orders, setOrders] = useState([]);
  const [orderData,setOrderData] = useState([]);
  async function fetchOrders() {
      const data =  axios.get('http://localhost:4000/cartItems');
      const res  =  axios.get('http://localhost:4000/list-orders');
      await axios.all([data,res]).then(
        axios.spread((res1,res2)=>{
          setOrderData(res1.data);
          setOrders(res2.data);
        })
      )
    }

    

    useEffect(() => {
      fetchOrders();
    },[]);
  return (
    <>
    <table class="fl-table">
      <thead>
      <tr>
               {/* <th>ProductId</th>
               <th>Product Name</th>
               <th>Product Section</th>
               <th>Product Size</th> */}
              <th>Order Id</th>
              <th>AMOUNT</th>
              <th>ISPAID</th>
              <th>RAZORPAY ID</th>
        </tr>
      </thead>
      <tbody>
      {orders.map((data)=>(
          <tr>
            <td>{data._id}</td>
            <td>{data.amount / 100}</td>
            <td>{data.isPaid ? 'YES' : 'NO'}</td>
            <td>{data.razorpay.paymentId}</td>
          </tr>
      ))}
        
      </tbody>
     </table>
    </>
  )
}

export default Ordered