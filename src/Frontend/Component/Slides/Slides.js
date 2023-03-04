import React from "react";
import SlideContainer from "../SlideContainer/SlideContainer";
import img1 from "../../../static/images/bg1.png";
// import img2 from '../images/ecommerce-g641056584_1920.jpg';
import img3 from "../../../static/images/bg2.png";
import img4 from "../../../static/images/bg3.png";
function Slides() {
  return (
    <ul class="slides">
      <SlideContainer
        id="img-1"
        src={img4}
        label1="img-3"
        label2="img-2"
        text="Men"
        percentage="25"
      />
      <SlideContainer
        id="img-2"
        src={img3}
        label1="img-1"
        label2="img-3"
        text="Baby"
        percentage="35"
      />
      <SlideContainer
        id="img-3"
        src={img1}
        label1="img-2"
        label2="img-1"
        text="Women"
        percentage="27"
      />
      <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  );
}

export default Slides;
