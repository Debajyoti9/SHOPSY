import React from "react";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
function BlogsPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="blog_container">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogsPage;
