import React, { Component } from 'react';
import './index.scss';

class Toggler extends Component{
    constructor(props) {
        super(props);
        this.state = {
          display: "Off", 
        };
      }
        toggleState = () => {
            this.setState((prevState) => ({
                display: prevState.display === "Off" ? "On" : "Off",
            }));
          };
        
    render(){
        return(
        <div class="toggler" onClick={this.toggleState}>{this.state.display}
        </div>)
    }
}

export default Toggler;