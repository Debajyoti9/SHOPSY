import React from "react";
import Home from "../Home/Home";
import Section from "../Section/Section";
import "./Style/Header.css";
import logo from "../../../static/images/shop-solid.svg";
// import login from '../images/arrow-right-to-bracket-solid.svg';
import Sign_up from "../../../static/images/user-plus-solid.svg";
import { Link } from "react-router-dom";
function Header() {
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
          <li class="linkSelect">
            <a href="#Home" class="link">
              Home
            </a>
          </li>
          <li class="linkSelect">
            <a href="#Men" class="link">
              Men
            </a>
          </li>
          <li class="linkSelect">
            <a href="#Women" class="link">
              Women
            </a>
          </li>
          <li class="linkSelect">
            <a href="#Baby" class="link">
              Baby
            </a>
          </li>
          <li class="linkSelect">
            <a href="#Trending" class="link">
              Trending
            </a>
          </li>
          <li class="linkSelect">
            <a href="#Blogs" class="link">
              Blogs
            </a>
          </li>
          <li class="linkSelect">
            <a href="#Contact" class="link">
              Contact
            </a>
          </li>
          <Link to="/login">
            <li class="linkSelect">
              <a href="#Login" class="link validation">
                <img src={Sign_up} alt="login" /> Sign Up
              </a>
            </li>
          </Link>
        </ul>
      </nav>
      <Home id="Home" />
      <Section id="Men" />
      <Section id="Women" />
      <Section id="Baby" />
      <Section id="Trending" />
      <Section id="Blogs" />
      <Section id="Contact" />
    </>
  );
}

export default Header;
