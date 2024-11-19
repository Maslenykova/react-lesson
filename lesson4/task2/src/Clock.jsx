import React, {Component} from 'react';
import './clock.scss';

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location, 
        offset: props.offset,     
        time: this.getTimeWithOffset(props.offset),
      };
    }
  
    getTimeWithOffset(offset) {
      const currentTime = new Date();
      const utcOffset = currentTime.getTimezoneOffset() / 60; 
      const localTime = new Date(
        currentTime.setHours(currentTime.getHours() + offset + utcOffset)
      );
      return localTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
    }
  
    componentDidMount() {
      this.timerId = setInterval(() => {
        this.setState({
          time: this.getTimeWithOffset(this.state.offset),
        });
      }, 1000);
    }
  
    render() {
      return (
        <div className="clock">
          <div className="clock__location">{this.state.location}</div>
          <div className="clock__time">{this.state.time}</div>
        </div>
      );
    }
  }
  
  export default Clock;