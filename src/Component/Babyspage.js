import React, { useEffect, useState } from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
function Babyspage() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:4000/products/baby`)
    .then((response) => response.json())
    .then((actualData) => setData(actualData))
    .catch((err) => {
     console.log(err.message);
    });
  },[])
  return (
    <>
      <Navbar/>
       <div className="container">
       {
      data.map((item)=>(
        <Card src={item.productImage} name={item.productName} avialable={item.productAvialable} size={item.sizeOfProduct} price={item.priceOfProduct} Id={item._id} key={item?._id}/>
      ))
    }
       </div>
      <Footer/>
    </>
  )
}

export default Babyspage;