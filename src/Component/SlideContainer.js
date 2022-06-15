import React from 'react'

function SlideContainer({id,src,label1,label2}) {
  return (
    <>
    <input type="radio" name="radio-buttons" id={id} checked />
      <li class="slide-container">
        <div class="slide-image">
           <h2>Fashion Sale</h2>
          <h3 className="off">30% off on Men's Product</h3>
          <p className='det'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet accusamus modi rerum, vero beatae quo, voluptatem voluptas, dicta labore officiis? Provident excepturi consequuntur laudantium.</p>
          <button className="static">Buy Now</button>
          <img src={src} alt="" />
        </div>
        <div class="carousel-controls">
        <label for={label1} class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for={label2} class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
    </>
  )
}

export default SlideContainer