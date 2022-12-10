import React, { useContext } from 'react';
import { LIContext } from '../../context/LoggedInContext';

const Home = () => {
    const { loggedIn, setLoggedIn } = useContext(LIContext);

    console.log(loggedIn);

    return (
    <div>Home</div>
  );
}

export default Home;