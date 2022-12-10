import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="header">
          <h2>/ Login /</h2>
          <h3>First time with us? Create an account</h3>
        </div>
        <div className="inputs">
          <input type="text" name="email" id="email" placeholder='E-Mail' />
          <input type="password" name="password" id="password" placeholder='Password' />
        </div>
        <input type="submit" value="Log in" />
      </div>
    </div>
  );
}

export default Login;