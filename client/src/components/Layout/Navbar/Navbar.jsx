import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link className='link' to="/">About&nbsp;/</Link>
            </li>
            <li>
                <Link className='link' to="/stories">Stories&nbsp;/</Link>
            </li>
            <li>
                <Link className='link' to="/game">Test yourself&nbsp;/</Link>
            </li>
            <li>
                <Link className='link' to="/contact-us">Contact us&nbsp;/</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;