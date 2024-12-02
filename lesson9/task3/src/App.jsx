import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = (userData) => {
    console.log('User data:', userData);
  };

  render() {
    return (
      <div>
        <UserForm onSubmit={this.createUser} />
      </div>
    );
  }
}

export default App;