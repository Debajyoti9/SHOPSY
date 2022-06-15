/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import Navbar from './Navbar'
import '../Component/Style/ProductDetails.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetails() {
    const [item,setItem] = useState([]);
    const [sizes,setSizes] = useState([]);
    const{id} = useParams();
    useEffect(()=>{
      fetch(`http://localhost:4000/products/${id}`)
      .then((response) => response.json())
      .then((actualData) => {
          setItem(actualData);
          setSizes(actualData.sizeOfProduct[0]);
      })
      .catch((err) => {
       console.log(err.message);
      },[item]);
    })
    
  return (
    <>
        <Navbar/>
        <div className = "main-wrapper">
        <h1 className="heading">PRODUCT DETAILS</h1>
        <div className = "main-container">
            <div className = "product-div">
                <div className = "product-div-left">
                    <div className = "img-container">
                        <img src = {item.productImage} alt = "watch"/>
                    </div>
                </div>
                <div className = "product-div-right">
                <span className = "product-name">{item.productName}</span>
                    <span className = "product-price">${item.priceOfProduct}</span>
                    <div className = "product-rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star-half-alt"></i></span>
                        <span>(350 ratings)</span>
                    </div>
                    <form action={`http://localhost:4000/products/${id}`} method="POST">
                    <p className = "product-description">{item.productDetails}</p>
                   
                    <div className="size"  style={{width:"200px"}}>
                    <h2>Size:</h2>
                    <select name="sizeOfProduct">
                       {sizes.map((sz)=>(<option value={sz}>{sz}</option>))}
                        </select>
                    </div>
                    <div className = "btn-groups">
                       <button type = "submit" value="submit" className = "add-cart-btn"><i class = "fas fa-shopping-cart"></i>add to cart</button>
                       <Link to="/cart"><button type = "button" className = "buy-now-btn"><i class = "fas fa-wallet"></i>Go to Cart</button></Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        <Footer/>
    </>
  )
}
