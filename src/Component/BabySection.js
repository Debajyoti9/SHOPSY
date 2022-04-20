import React from 'react'
import baby from '../images/baby_shoe.png';
import Card from './Card';
import more from '../images/angle-right-solid.svg';
function BabySection() {
  return (
    <div class="container">
    <Card src={baby}/>
    <Card src={baby}/>
    <Card src={baby}/>
    <Card src={baby}/>
    <Card src={baby}/>
    <Card src={baby}/>
    <button className="show_more">Show More<img src={more} alt="more" /></button>
  </div>
  )
}

export default BabySection