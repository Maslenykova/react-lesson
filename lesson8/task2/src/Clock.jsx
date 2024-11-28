import React, {Component} from 'react';

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(),
        };
      }
      componentDidMount(){
        this.interval = setInterval(() => {
          this.setState({
            date: new Date(),
          });
          
        }, 1000);
      }
      componentWillUnmount(){
        clearInterval(this.interval);
      }
    
      getTimeWithOffset(offset) {
        const currentTime = new Date();
        const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
        return new Date(utcTime + offset * 3600000);
      }
    
      render() {
        const { location, offset } = this.props;
        const localTime = this.getTimeWithOffset(offset);
    
        return (
          <div className="clock">
            <div className="clock__location">{location}</div>
            <div className="clock__time">{localTime.toLocaleTimeString()}</div>
          </div>
        );
    }
}

export default Clock;