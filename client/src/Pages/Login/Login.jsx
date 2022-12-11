import React, { useState, useContext, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import banner from "../../assets/banner1.png";
import { AContext } from '../../context/AuthContext';
import { LIContext } from '../../context/LoggedInContext';

const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { token, setToken } = useContext(AContext);
  const { loggedIn, setLoggedIn } = useContext(LIContext);

  function handleLogin() {
    fetch("http://localhost:4000/user/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    }).then(r => r.json()).then(data => {
      setToken(data.token);
      setLoggedIn(true);
      navigate("/");
    });
  }

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <img src={banner} alt="text" />
        <div className="authContent">
        <div className="header">
          <h2>Login</h2>
          <h3 onClick={()=>{navigate('/register')}} className='registerLink'>First time with us? Create an account.</h3>
        </div>
        <div className="inputs">
          <input onChange={(e) => { setEmail(e.target.value); }} type="email" name="email" id="email" placeholder='E-Mail' />
          <input onChange={(e) => { setPassword(e.target.value); }} type="password" name="password" id="password" placeholder='Password' />
        </div>
        <input onClick={handleLogin} type="submit" value="Log in" />
        </div>
        
      </div>
    </div>
  );
}

export default Login;