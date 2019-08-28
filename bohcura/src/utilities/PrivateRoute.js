import React from 'react';
import { Route, Redirect } from 'react-router';

// requirements: R
// 1. It has the same API as `<Route />` - Have the same props
// 2. It renders a <Route /> and passes all the props through to it.

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />;
                }
                return <Redirect to="/login" />;
            }}
        />
    );
};

export default PrivateRoute;