import React, {Component} from 'react';
import Online from './Online';
import Offline from './Offline';



class Status extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOnline: true, 
      };
    }
  
    reconnect = () => {
      this.setState({ isOnline: true }); 
    };
  
    render() {
      const { isOnline } = this.state;
  
      return isOnline ? (
        <Online />
      ) : (
        <Offline onReconnect={this.reconnect} />
      );
    }
  }
  
  export default Status;