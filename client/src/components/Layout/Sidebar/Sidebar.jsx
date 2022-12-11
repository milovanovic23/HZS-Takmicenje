import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LIContext } from '../../../context/LoggedInContext';
import { AContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useLocation } from 'react-router-dom';
import unknown from '../../../assets/unknownProfile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


import logo from "../../../assets/logo-updated.png";

const Sidebar = () => {
    const location=useLocation();
    const { loggedIn, setLoggedIn } = useContext(LIContext);
    const { token, setToken } = useContext(AContext);
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init();
      }, [])
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
            <div onClick={() => window.location.reload()} className="profile expand">
                <img src={avatar} alt="Avatar" />
                <p>{username}</p>
            </div>
        ) : (
            <div onClick={() => navigate("/login")} className="profile expand">
                <img src={unknown} alt="Unknown" />
                <p>Login</p>
            </div>
        ) }
        
        
        <img data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000" src={logo} alt="IHEARYOU" />
       
        {/* <button onClick={() => setLoggedIn(true)}>login</button>
        <button onClick={() => setLoggedIn(false)}>logout</button> */}
        </>
    );
}

export default Sidebar;