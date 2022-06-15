import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import './Style/Login.css';
function Login() {
  return (
   <>
       <Navbar/>
       <div className="login_body">
       <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true"  className='label'>Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" className='user_input'/>
					<input type="email" name="email" placeholder="Email" required="" className='user_input'/>
					<input type="password" name="pswd" placeholder="Password" required="" className='user_input'/>
					<button className='login_btn'>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true" className='label'>Login</label>
					<input type="email" name="email" placeholder="Email" required="" className='user_input'/>
					<input type="password" name="pswd" placeholder="Password" required="" className='user_input'/>
					<button className='login_btn'>Login</button>
				</form>
			</div>
	</div>
    </div>
       <Footer/>
   </>
  )
}

export default Login;