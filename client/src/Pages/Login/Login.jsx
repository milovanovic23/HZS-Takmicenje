import React from 'react';
import './Login.css';
import banner from "../../assets/banner1.png";

const Login = () => {
  return (
    <div className="auth">
      <div className="auth-wrapper">
        <img src={banner} alt="text" />
        <div className="authContent">
        <div className="header">
          <h2>Login</h2>
          <h3 className='registerLink'>First time with us? Create an account.</h3>
        </div>
        <div className="inputs">
          <input type="text" name="email" id="email" placeholder='E-Mail' />
          <input type="password" name="password" id="password" placeholder='Password' />
        </div>
        <input type="submit" value="Log in" />
        </div>
        
      </div>
    </div>
  );
}

export default Login;