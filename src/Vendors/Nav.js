import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/shop-solid.svg';
import user from '../images/user.svg';
import logout from '../images/logout.svg';
function Nav() {
  return (
    <nav class="navBarWrapper" id="navBarWrapper">
    <Link to="/" style={{ textDecoration: 'none' }}>
    <div class="logoWrapper">
         <img src={logo} class="logoIcon" alt="logo"/>
      <div class="logo">SHOPEE</div>
      </div>
    </Link>
<div class="menuIconWrapper" id="menuIconWrapper">
</div>
<ul class="navLink" id="navBar">
  <Link to="/user_vendor"><li class="linkSelect"><a href="#Login" class="link validation"><img src={user} alt="user"/>Vendor</a></li></Link>
<Link to="/vendor"><li class="linkSelect"><a href="#Login" class="link validation"><img src={logout} alt="user"/>Log Out</a></li></Link>
</ul>
</nav>
  )
}

export default Nav;