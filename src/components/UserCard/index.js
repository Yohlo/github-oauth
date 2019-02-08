import React from "react";
import { connect } from 'react-redux';
import './styles.css';

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
