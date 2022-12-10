import React from 'react';
import './Home.css';

import img1 from '../../assets/landing1.png';
import img2 from '../../assets/landing2.png';

const Home = () => {
    return (
        <div className="landing">
            <h1>
                The trick <br />
                is to <br />
                communicate
            </h1>
            <section>
                <div>
                    <p>The internet is involved in everyone’s life today, but as much good as it brings, it brings the same amount of bad things that could happen to you if you stumble upon the bad part of the internet. Our story-based, point-and-click games try to help everyone understand the importance of trying to find help for yourself or someone that needs it.</p>
                </div>
                <img src={img1} alt="IMG1" />
            </section>
            <section>
                <img src={img2} alt="IMG2" />
                <div>
                    <p>Also, a big part of our goal is to bring awareness to what could happen in the worst possible scenario, and help people find good in themselves and the others.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;