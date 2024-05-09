import React from 'react'
import "./SignUp.css"


const SignUp = () => {
  return (
  <div className='login-body'>
  <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>

    <div className="login-container">
    <form action="code.html">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
        <a href="create.html" style={{color: "white"}} className="navbar-link" data-nav-link>Create account </a>
          
</form>
</div>


</div>
  )
}

export default SignUp;