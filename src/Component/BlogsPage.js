import React from 'react'
import Blog from './Blog';
import Footer from './Footer';
import Navbar from './Navbar';
function BlogsPage() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <div className="blog_container">
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default BlogsPage;