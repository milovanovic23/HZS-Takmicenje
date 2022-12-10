import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Foooter from './Footer/Footer.jsx';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <main>
                { children }
            </main>
            <Foooter/>
        </>
    );
}

export default Layout;