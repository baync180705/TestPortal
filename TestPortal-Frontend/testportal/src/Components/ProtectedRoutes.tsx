import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ProtectedRoutes(props: any) {
    const { Cmp } = props;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const login = localStorage.getItem('login');
        const role = localStorage.getItem('role');

        // Check if the user is logged in and if the role matches the route
        if (!login || (location.pathname.startsWith('/teacher') && role !== 'teacher')|| (location.pathname.startsWith('/student')&& role!='student')) {
            navigate('/login');
        }
    }, [location.pathname]); // Run effect when location changes

    return (
        <div>
            <Cmp />
        </div>
    );
}

export default ProtectedRoutes;