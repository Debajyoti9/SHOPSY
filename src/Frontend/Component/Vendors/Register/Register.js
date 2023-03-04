import React from "react";
import "../Style/Register.css";
function Register() {
  return (
    <div className="body">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="vendorForm">
        <h3>Register Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label for="shopname">Shop Name</label>
        <input type="text" placeholder="Enter your Shop Name" id="shopname" />
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
