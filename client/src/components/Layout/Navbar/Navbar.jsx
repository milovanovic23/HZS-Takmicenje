import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import burger from '../../../assets/burger.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <nav data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500">
            <img src={burger}/>
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
                    <Link className='link' to="/create-post">
<<<<<<< HEAD
                    { pathname === "/create-post" ? <div className="active">be heard</div> : "be heard"}
=======
                    { pathname === "/create-post" ? <div className="active">Be heard</div> : "be heard"}
>>>>>>> db33a2394f4a7eb8ad70b7c3b818a73be18adfdb
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;