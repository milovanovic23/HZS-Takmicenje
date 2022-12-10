import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <nav>
            <ul>
                <li>
                    <Link className='link' to="/">
                        { pathname === "/" ? <div className="active">About</div> : "About"}
                    </Link>
                </li>
                <li>
                    &nbsp;/
                </li>
                <li>
                    <Link className='link' to="/stories">
                    { pathname === "/stories" ? <div className="active">Stories</div> : "Stories"}
                    </Link>
                </li>
                <li>
                    &nbsp;/
                </li>
                <li>
                    <Link className='link' to="/test-yourself">
                    { pathname === "/test-yourself" ? <div className="active">Test yourself</div> : "Test yourself"}
                    </Link>
                </li>
                <li>
                    &nbsp;/
                </li>
                <li>
                    <Link className='link' to="/contact-us">
                    { pathname === "/contact-us" ? <div className="active">Contact us</div> : "Contact us"}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;