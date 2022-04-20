import React from 'react'
import SlideContainer from './SlideContainer'

function Slides() {
  return (
    <ul class="slides">
       <SlideContainer id="img-1" src="https://images.pexels.com/photos/3951808/pexels-photo-3951808.jpeg?auto=compress&cs=tinysrgb" label1="img-3" label2="img-2"/>
       <SlideContainer id="img-2" src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" label1="img-1" label2="img-3"/>
       <SlideContainer id="img-3" src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" label1="img-2" label2="img-1"/>
       <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  )
}

export default Slides