import React,{useEffect} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './Style/Cart.css';
import { useState } from 'react';
import CartItem from './CartItem';
import axios from 'axios';
import PayNow from './PayNow';
export default function Cart() {
  const allId=[];
    const [data,setData] = useState([]);
    const[total,setTotal] = useState(0);
    // const [id,setId] = useState("");
      function deleteItem(id){
        axios.post(`http://localhost:4000/cartItems/${id}`)
        .then(function (response) {
          alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      const getData = ()=>{
           axios.get('http://localhost:4000/cartItems')
          .then((response) => 
           setData(response.data)
          )}   
    useEffect(()=>getData(),[]); 
  return (
      <>
      <Navbar/>
      {data.length === 0 ? <h1 className='empty_cart'>Cart Is Empty! <span>Add some Item to the Cart</span></h1>:<>
      {data?.map((item,idx)=> <div className="cart" key={item?._id}>
       <CartItem src={item?.productImage} name={item?.productName} size={item?.productSize} price={item?.productPrice}   setTotal={setTotal}/>
       <div className="cart_product_delete">
             <button onClick={()=>{
              deleteItem(item?._id)
             }}>Del</button>
         </div>
         </div>)}
       <div className="cart_product_total">Total price: <span>{total}/-</span></div>
        <PayNow orderAmount={total} allIds={allId}/>
      </>}
       
     <Footer/>
     </>
  )
}