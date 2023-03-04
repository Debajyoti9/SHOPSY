import React from "react";
import "../Header/Style/Header.css";
import logo from "../../../static/images/shop-solid.svg";
import Sign_up from "../../../static/images/user-plus-solid.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav class="navBarWrapper" id="navBarWrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div class="logoWrapper">
            <img src={logo} class="logoIcon" alt="logo" />
            <div class="logo">SHOPEE</div>
          </div>
        </Link>
        <div class="menuIconWrapper" id="menuIconWrapper"></div>
        <ul class="navLink" id="navBar">
          <Link to="/">
            <li class="linkSelect">
              <a href="#Home" class="link">
                Home
              </a>
            </li>
          </Link>
          <Link to="/men">
            <li class="linkSelect">
              <a href="#Men" class="link">
                Men
              </a>
            </li>
          </Link>
          <Link to="/women">
            <li class="linkSelect">
              <a href="#Women" class="link">
                Women
              </a>
            </li>
          </Link>
          <Link to="/baby">
            <li class="linkSelect">
              <a href="#Baby" class="link">
                Baby
              </a>
            </li>
          </Link>
          <Link to="/trending">
            <li class="linkSelect">
              <a href="#Trending" class="link">
                Trending
              </a>
            </li>
          </Link>
          <Link to="/blogs">
            <li class="linkSelect">
              <a href="#Blogs" class="link">
                Blogs
              </a>
            </li>
          </Link>
          <Link to="/login">
            <li class="linkSelect">
              <a href="#Login" class="link validation">
                <img src={Sign_up} alt="login" /> Sign Up
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
