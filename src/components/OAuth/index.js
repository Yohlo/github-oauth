import React from "react";
import { connect } from 'react-redux';
import { storeAccessToken, getUser } from '../../actions';
import { Redirect } from 'react-router'
import { NavLink } from 'react-router-dom';
const queryString = require('query-string');

/**
 * 
 * Login is a component that tells the user to login.
 * 
 */
export const Login = (props) => {
    return <div>
        <p>
            Login via GitHub by clicking the link below.
        </p>
        <NavLink className="App-link"
            to="/Login"
        >
            Login
        </NavLink>
    </div>;
}

/**
 * 
 * Stores the access token and gets the user!
 * 
 * @param {any} storeAccessToken function that stores the access token in the store
 * @param {any} getUser function that gets user from services
 */
const SuccessComponent = ({ storeAccessToken, getUser, ...props }) => {
    const access_token = queryString.parse(props.location.search).access_token;
    storeAccessToken(access_token);
    getUser();
    return <Redirect to="/" />
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...props,
        storeAccessToken: (access_token) => dispatch(storeAccessToken(access_token)),
        getUser: () => dispatch(getUser())
    };
}

export const Success = connect(null, mapDispatchToProps)(SuccessComponent);

// Uh-oh!
export const Error = (props) => {
    return <p>Erorr!</p>;
}