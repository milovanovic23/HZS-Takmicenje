import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LIContext } from '../../../context/LoggedInContext';
import { AContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useLocation } from 'react-router-dom';
import unknown from '../../../assets/unknownProfile.jpg';

import testYourself from "../../../assets/testyourself.png";
import logo from "../../../assets/logo-updated.png";

const Sidebar = () => {
    const location=useLocation();
    const { loggedIn, setLoggedIn } = useContext(LIContext);
    const { token, setToken } = useContext(AContext);
    const navigate = useNavigate();

    const [ username, setUsername ] = useState("");
    const [ avatar, setAvatar ] = useState("");

    useEffect(() => {
        fetch(`http://localhost:4000/user/${token}`)
        .then(r=>r.json())
        .then(data => {
            setUsername(data.username);
            setAvatar(data.avatarUrl);
        });
    }, []);

    return (
        <>
        { loggedIn ? (
            <div onClick={() => navigate("/my-profile")} className="profile expand">
                <img src={avatar} alt="Avatar" />
                <p>{username}</p>
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