import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { LIContext } from './LoggedInContext';

const ProtectedRoute = ({ children }) => {
    const { loggedIn, setLoggedIn } = useContext(LIContext);

    if (loggedIn) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }

}

export default ProtectedRoute;