import React, {Component} from 'react';
import Online from './Online';
import Offline from './Offline';



class Status extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOnline: false,
      };
    }
  
    reconnect = () => {
      this.setState({ isOnline: true });
    };
  
    disconnect = () => {
      this.setState({ isOnline: false });
    };
  
    render() {
      const { isOnline } = this.state;
  
      return (
        <div>
          {isOnline ? <Online /> : <Offline reconnect={this.reconnect} />}
        </div>
      );
    }
  }
  
  export default Status;