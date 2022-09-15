import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getDataLocal } from '../Utility/localStore';

const AuthonticationPage = ({ children }) => {

    let location = useLocation();
    let user = getDataLocal('user')
    if (!user ) {
        return <Navigate to="/adminlogin" state={{ from: location }} replace />;
    } else {
        
        return children;
    }

};
export default AuthonticationPage;

