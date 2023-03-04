import React from 'react'
import './Style/Card.css'
import {Link} from 'react-router-dom';
function Card({src,name,price,Id,size}) {
  return (
    <div class="card">
    <div class="imgBx">
      <img src={src} alt="shoe"/>
    </div>
    <div class="contentBx">
      <h2>{name}</h2>
      <div class="size">
        <h3>Size :</h3>
        {size[0].map((sz)=><span>{sz}</span>)}
      </div>
      <div class="price">
        <h3>Price :</h3>
        <span>{price}</span>
      </div>
      <Link to={`/productDetails/${Id}`}><a href="#b">Buy Now</a></Link>
    </div>
  </div>
  )
}

export default Card;