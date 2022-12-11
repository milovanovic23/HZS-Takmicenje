import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Foooter from './Footer/Footer.jsx';
import './Layout.css';
import Sidebar from './Sidebar/Sidebar.jsx';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            <main>
                <Navbar/>
                <section className='content'>
                    { children }
                </section>
                <Foooter/>
            </main>
            { location.pathname === '/login' || location.pathname==='/register'? <></> : <section className='sidebar'><Sidebar /></section>}
            
        </>
    );
}

export default Layout;