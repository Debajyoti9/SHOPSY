import React from 'react'

function SlideContainer({id,src,label1,label2}) {
  return (
    <>
    <input type="radio" name="radio-buttons" id={id} checked />
      <li class="slide-container">
        <div class="slide-image">
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