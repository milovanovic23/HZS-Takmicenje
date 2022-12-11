import React, { useState, useContext } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import banner from "../../assets/banner2.png";
import { LIContext } from '../../context/LoggedInContext';
import { AContext } from '../../context/AuthContext';

const Register = () => {
  const navigate=useNavigate();
  const { loggedIn, setLoggedIn } = useContext(LIContext);
  const { token, setToken } = useContext(AContext);
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordConfirm, setPasswordConfirm ] = useState("");

  function handleRegister() {

    if (password === passwordConfirm) {
      fetch("http://localhost:4000/user/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          username,
          email,
          password
        })
      }).then(r=>r.json()).then(data=> {
        setToken(data.token);
        setLoggedIn(true);
        navigate("/");
      });
    } else {
      alert("Passwords don't match!");
    }
  }

  return (
    <div className="authR">
      <div className="authR-wrapper">
        <div className="authRContent">
        <div className="headerR">
          <h2>Register</h2>
          <h3 onClick={()=>{navigate('/login')}} className='loginLink'>Already used this site? Login.</h3>
        </div>
        <div className="inputsR">
          <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" placeholder='Username' />
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='E-Mail' />
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password' />
          <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" name="passwordRepeat" id="passwordRepeat" placeholder='Confirm Password' />
        </div>
        <input onClick={handleRegister} type="submit" value="Sign up" />
        </div>
        <img src={banner} alt="text" />
        
      </div>
    </div>
  );
}

export default Register;