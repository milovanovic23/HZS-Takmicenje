import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link className='link' to="/">About</Link>
            </li>
            <li>
                &nbsp;/
            </li>
            <li>
                <Link className='link' to="/stories">Stories</Link>
            </li>
            <li>
                &nbsp;/
            </li>
            <li>
                <Link className='link' to="/game">Test yourself</Link>
            </li>
            <li>
                &nbsp;/
            </li>
            <li>
                <Link className='link' to="/contact-us">Contact us</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;