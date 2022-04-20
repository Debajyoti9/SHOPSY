import React from 'react';
import baby from '../images/baby_shoe.png';
import more from '../images/angle-right-solid.svg';
import womenfashion from '../images/shoe.png';
import Card from './Card';
function TrendingSection() {
  return (
    <div class="container">
    <Card src={baby}/>
    <Card src={womenfashion}/>
    <Card src="https://assets.codepen.io/4164355/shoes.png"/>
    <Card src="https://assets.codepen.io/4164355/shoes.png"/>
    <Card src={baby}/>
    <Card src={womenfashion}/>
    
    <button className="show_more">Show More<img src={more} alt="more" /></button>
  </div>
  )
}

export default TrendingSection