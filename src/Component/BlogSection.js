import React from 'react'
import Blog from './Blog'
import more from '../images/angle-right-solid.svg';
function BlogSection() {
  return (
    <div className="container">
    <div class="blog_container">
      <Blog/> 
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <button className="show_more">Show More<img src={more} alt="more" /></button>
   </div>
</div>
  )
}

export default BlogSection