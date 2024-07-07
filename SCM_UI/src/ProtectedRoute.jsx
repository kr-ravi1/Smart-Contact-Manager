import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = '/error'}) => {
    const userData = localStorage.getItem('UserData');

    if (!userData) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet/>;
};

export default ProtectedRoute;
