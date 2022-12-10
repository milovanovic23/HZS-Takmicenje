import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LIContext } from '../../../context/LoggedInContext';
import './Sidebar.css';

import testYourself from "../../../assets/testyourself.svg";
import logo from "../../../assets/logo-updated.png";

const Sidebar = () => {

    const { loggedIn, setLoggedIn } = useContext(LIContext);

    return (
        <>
        { loggedIn ? (
            <Link className='link' to="/my-profile">
                <div className="profile">
                    <img src="https://avatars.dicebear.com/api/adventurer-neutral/USERID.svg" alt="Avatar" />
                    <p>username</p>
                </div>
            </Link>
        ) : (
            <Link className='link' to="/register">Sign up</Link>
        ) }
        
        <img src={testYourself} alt="Test yourself" />
        <img src={logo} alt="IHEARYOU" />

        <button onClick={() => setLoggedIn(true)}>login</button>
        <button onClick={() => setLoggedIn(false)}>logout</button>
        </>
    );
}

export default Sidebar;