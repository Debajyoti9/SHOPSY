import React from "react";
import "./Style/Blog.css";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div class="b_card">
      <div class="face face1">
        <div class="content">
          <div class="icon">
            <img
              src="https://www.wpbeginner.com/wp-content/uploads/2016/11/choose-best-blogging-platform.png"
              alt="blog"
            />
          </div>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <h3>Blog Heading</h3>
          <p>
            This is where I network and build professionalprotfolio.
            <Link to="/blogDetails">
              <a href="#e" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
