import React, { Component } from 'react';
import UserCard from '../UserCard';

class Home extends Component {
  render() {
    return (
      <div>
        <UserCard />
        <p>Welcome to the home page. You are successfully logged in!</p>
      </div>
    );
  }
}

export default Home;