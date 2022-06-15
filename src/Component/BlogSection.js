import React from 'react'
import Blog from './Blog'
import more from '../images/angle-right-solid.svg';
import {Link} from 'react-router-dom';
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
      <Link to="/blogs"><button className="show_more">Show More<img src={more} alt="more" /></button></Link>
   </div>
</div>
  )
}

export default BlogSection