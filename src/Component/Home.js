import React from 'react';
import Slides from './Slides';
import './Style/Home.css';
function Home({id}) {
   
  return (
    <section id={id}>
    <div class="carousel">
       <Slides/>
     </div>
    </section>
  )
}

export default Home