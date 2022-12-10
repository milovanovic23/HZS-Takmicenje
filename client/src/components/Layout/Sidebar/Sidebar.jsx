import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LIContext } from '../../../context/LoggedInContext';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

import testYourself from "../../../assets/testyourself.svg";
import logo from "../../../assets/logo-updated.png";

const Sidebar = () => {

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
            <Link className='link expand' to="/register" style={{ letterSpacing: "0.3rem" }}>Sign up</Link>
        ) }
        
        <img className='expand' onClick={() => navigate("/game")} style={{ width: "100%", cursor: "pointer" }} src={testYourself} alt="Test yourself" />
        <img src={logo} alt="IHEARYOU" />

        {/* <button onClick={() => setLoggedIn(true)}>login</button>
        <button onClick={() => setLoggedIn(false)}>logout</button> */}
        </>
    );
}

export default Sidebar;