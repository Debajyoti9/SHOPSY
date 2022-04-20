import React from 'react'
import Card from './Card'
import womenfashion from '../images/shoe.png';
import more from '../images/angle-right-solid.svg';
function WomenSection() {
  return (
    <div class="container">
      <Card src={womenfashion}/>
      <Card src={womenfashion}/>
      <Card src={womenfashion}/>
      <Card src={womenfashion}/>
      <Card src={womenfashion}/>
      <Card src={womenfashion}/>
      <button className="show_more">Show More<img src={more} alt="more" /></button>
    </div>
  )
}

export default WomenSection