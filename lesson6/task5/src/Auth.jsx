import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";
import './index.scss';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoading: true });
    
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false,
      });
    }, 2000); 
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="panel">
          <Spinner/>
        </div>
      );
    }

    return (
      <div className="panel">
        {isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;