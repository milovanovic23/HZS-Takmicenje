import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import banner from "../../assets/banner2.png";

const Register = () => {
  const navigate=useNavigate();

  return (
    <div className="authR">
      <div className="authR-wrapper">
        <div className="authRContent">
        <div className="headerR">
          <h2>Register</h2>
          <h3 onClick={()=>{navigate('/login')}} className='loginLink'>Already used this site? Login.</h3>
        </div>
        <div className="inputsR">
          <input type="email" name="email" id="email" placeholder='E-Mail' />
          <input type="password" name="password" id="password" placeholder='Password' />
          <input type="password" name="passwordRepeat" id="passwordRepeat" placeholder='Confirm Password' />
        </div>
        <input type="submit" value="Sign up" />
        </div>
        <img src={banner} alt="text" />
        
      </div>
    </div>
  );
}

export default Register;