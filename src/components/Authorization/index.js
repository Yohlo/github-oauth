import React from "react";
import { connect } from 'react-redux';
import RedirectOffServer from '../RedirectOffServer';

// URL to my Elastic Beanstalk AWS server. Code can be found on my GitHub
const SERVER_URL = "https://api.yohlo.me/"

/**
 * 
 * Authorization will evaluate if a user has access to the component and
 * return the component or a restricted page.
 * 
 * @param {any} Component 
 * @param {array} allowed list of usernames allowed on page/component (optional)
 * @param {object} access_token access_token
 * @param {object} login login
 */
const Authorization = ({ Component, access_token, login, ...props}) => {

    if (!access_token) {
        return <RedirectOffServer {...props}
            target={`${SERVER_URL}/auth/login?app=github-oauth`}
        />
    } else {
        return <Component {...props} />;
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        access_token: state.oauth.access_token,
        login: state.oauth.login
    };
}

export default connect(mapStateToProps)(Authorization);