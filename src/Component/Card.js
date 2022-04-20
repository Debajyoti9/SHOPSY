import React from 'react'
import './Style/Card.css'
function Card({src}) {
  return (
    <div class="card">
    <div class="imgBx">
      <img src={src} alt="shoe"/>
    </div>
    <div class="contentBx">
      <h2>Nike Shoes</h2>
      <div class="size">
        <h3>Size :</h3>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div class="color">
        <h3>Color :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="#b">Buy Now</a>
    </div>
  </div>
  )
}

export default Card