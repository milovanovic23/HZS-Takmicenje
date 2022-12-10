import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Foooter from './Footer/Footer.jsx';
import './Layout.css';
import Sidebar from './Sidebar/Sidebar.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <main>
                <Navbar/>
                <section className='content'>
                    { children }
                </section>
                <Foooter/>
            </main>
            <section className='sidebar'>
                <Sidebar />
            </section>
        </>
    );
}

export default Layout;