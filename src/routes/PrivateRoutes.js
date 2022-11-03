import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

//redux
import {useSelector} from 'react-redux'

const isLogged = useSelector(state => state.isLogged)

const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route
        {...rest}
        render={props =>
            isLogged ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
);

export default PrivateRoute;