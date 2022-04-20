import React from 'react'
import Card from './Card';
import more from '../images/angle-right-solid.svg';
function MenSection() {
  return (
    <div class="container">
      <Card src="https://assets.codepen.io/4164355/shoes.png"/>
      <Card src="https://assets.codepen.io/4164355/shoes.png"/>
      <Card src="https://assets.codepen.io/4164355/shoes.png"/>
      <Card src="https://assets.codepen.io/4164355/shoes.png"/>
      <Card src="https://assets.codepen.io/4164355/shoes.png"/>
      <Card src="https://assets.codepen.io/4164355/shoes.png"/>
      
      <button className="show_more">Show More<img src={more} alt="more" /></button>
    </div>
  )
}

export default MenSection