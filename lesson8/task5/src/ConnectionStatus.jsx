import React, {Component} from 'react';

class ConnectionStatus extends Component{
    state={
        online: true,
    }
    componentDidMount(){
        window.addEventListener('offline', this.handleOffline);
        window.addEventListener('online', this.handleOnline);
    }
    componentWillUnmount(){
        window.removeEventListener('offline', this.handleOffline);
        window.removeEventListenerr('online', this.handleOnline);
    }
    handleOffline = () => {
        this.setState({ online: false }); 
      };
      handleOnline = () => {
        this.setState({ online: true }); 
      };
    render(){
        const { online } = this.state;    
        const statusClass = online ? 'status' : 'status status_offline';
        const statusText = online ? 'online' : 'offline';
        return(
            <div className={statusClass}>{statusText}</div>
        )
    }
}

export default ConnectionStatus;