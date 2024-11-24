import React, {Component} from 'react';
import Online from './Online';
import Offline from './Offline';


class Status extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOnline:true,
        };
    }

    reconnect = () => {
        this.setState({ isOnline: true }); 
      };

render(){
    return(this.state.isOnline === true ? <Online /> : <Offline onReconnect={this.reconnect}/>)
}
}
export default Status;