import React,{useEffect, useContext} from 'react';
import './Home.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/landing1.png';
import img2 from '../../assets/landing2.png';
import testYourself from '../../assets/testyourself1.png';
import { AContext } from '../../context/AuthContext';

const Home = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const { token, setToken } = useContext(AContext);
    
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className="landing">
            
            <h1 data-aos="zoom-in-right" data-aos-duration="1000">
                The trick <br />
                is to <br />
                communicate
            </h1>
           
            <section>
                <div data-aos="fade-right" data-aos-duration="1000" className='sectionLandingText'>
                    <p>The internet is involved in everyone’s life today, but as much good as it brings, it brings the same amount of bad things that could happen to you if you stumble upon the bad part of the internet. Our story-based, point-and-click games try to help everyone understand the importance of trying to find help for yourself or someone that needs it.</p>
                </div>
                <img src={img1} alt="IMG1" />
            </section>
            <section className='sectionWithTest'>
                <img src={img2} alt="IMG2" />
                <div data-aos="fade-left" data-aos-duration="1000" className='sectionLandingText extended'>
                    <p>Also, a big part of our goal is to bring awareness to what could happen in the worst possible scenario, and help people find good in themselves and others.</p>
                    { location.pathname === '/test-yourself'? <></> : <img className="testYourSelfLanding" onClick={() => navigate("/test-yourself")} style={{ cursor: "pointer" }} src={testYourself} alt="Test yourself" />}
                </div>
                
            </section>
        </div>
    );
}

export default Home;