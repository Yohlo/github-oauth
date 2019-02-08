import React from "react";
import { connect } from 'react-redux';
import './styles.css';

/**
 * 
 * User card is a little card that displays github user info
 * 
 * @param {text} avatar_url url to users github avatar
 * @param {text} name users name
 * @param {text} login users login
 */
const UserCard = ({ login, avatar_url, name, ...props }) => {
    return <div class="user-card">
        <img src={avatar_url} alt="GitHub Avatar" />
        <div class="user-card-body">
            <p class="name">{name}</p>
            <p class="login">{login}</p>
        </div>
    </div>;
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        login: state.oauth.login,
        name: state.oauth.name,
        avatar_url: state.oauth.avatar_url,
    };
}

export default connect(mapStateToProps)(UserCard);
