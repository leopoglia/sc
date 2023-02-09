import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddNews from '../admin/addNew';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = checkIfUserIsAuthenticated(); // Function to check if the user is authenticated

    function checkIfUserIsAuthenticated() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            return false;
        }
    }

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/admin');
    }



    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <AddNews />
                ) : (
                    {handleLogin}
                )
            }
        />
    );
};

export default PrivateRoute;