import React from 'react'
import Home from './Home';
import Section from './Section';
import './Style/Header.css';
import logo from '../images/shop-solid.svg';
import login from '../images/arrow-right-to-bracket-solid.svg';
import Sign_up from '../images/user-plus-solid.svg';
function Header() {
  return (
      <>
    <nav class="navBarWrapper" id="navBarWrapper">
      <div class="logoWrapper">
         <img src={logo} class="logoIcon" alt="logo"/>
      <div class="logo">SHOPSY</div>
      </div>
  <div class="menuIconWrapper" id="menuIconWrapper">
  </div>
  <ul class="navLink" id="navBar">
    <li class="linkSelect"><a href="#Home" class="link">Home</a></li>
    <li class="linkSelect"><a href="#Men" class="link">Men</a></li>
    <li class="linkSelect"><a href="#Women" class="link">Women</a></li>
    <li class="linkSelect"><a href="#Baby" class="link">Baby</a></li>
    <li class="linkSelect"><a href="#Trending" class="link">Trending</a></li>
    <li class="linkSelect"><a href="#Blogs" class="link">Blogs</a></li>
    <li class="linkSelect"><a href="#Contact" class="link">Contact</a></li>
    <li class="linkSelect"><a href="#Login" class="link validation"><img src={login} alt="login"/> Login</a></li>
    <li class="linkSelect"><a href="#SignUp" class="link validation"><img src={Sign_up} alt="Signup"/> Sign Up</a></li>
  </ul>
  </nav>
  <Home id="Home"/>
  <Section id="Men"/>
  <Section id="Women"/>
  <Section id="Baby"/>
  <Section id="Trending"/>
  <Section id="Blogs"/>
  <Section id="Contact"/>
</>
  )
}

export default Header