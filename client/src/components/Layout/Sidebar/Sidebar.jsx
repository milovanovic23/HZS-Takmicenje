import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LIContext } from '../../../context/LoggedInContext';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useLocation } from 'react-router-dom';
import unknown from '../../../assets/unknownProfile.jpg';

import testYourself from "../../../assets/testyourself.png";
import logo from "../../../assets/logo-updated.png";

const Sidebar = () => {
    const location=useLocation();
    const { loggedIn, setLoggedIn } = useContext(LIContext);
    const navigate = useNavigate();

    return (
        <>
        { loggedIn ? (
            <div onClick={() => navigate("/my-profile")} className="profile expand">
                <img src="https://avatars.dicebear.com/api/adventurer-neutral/USERID.svg" alt="Avatar" />
                <p>username</p>
            </div>
        ) : (
            <div onClick={() => navigate("/login")} className="profile expand">
                <img src={unknown} alt="Unknown" />
                <p>Login</p>
            </div>
        ) }
        
        
        <img src={logo} alt="IHEARYOU" />
       
        {/* <button onClick={() => setLoggedIn(true)}>login</button>
        <button onClick={() => setLoggedIn(false)}>logout</button> */}
        </>
    );
}

export default Sidebar;