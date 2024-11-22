import React, {Component} from "react";
import Greeting from './Greeting';


class Auth extends Component {
    constructor(props){
         super(props);

         this.state = {
            isLoggedIn: false,
         }
    }
    handlLogin = () =>{
        this.setState({
            isLoggedIn: true,
        })
    }
    handlLogout = () =>{
        this.setState({
            isLoggedIn: false,
        })
    }
    render() {
        return(
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
             {(this.state.isLoggedIn) ? (
                <button onClick={this.handlLogout}>Logout</button>
            ) : (
               <button onClick={this.handlLogin}>Login</button>)}
               
            </div>
        );
    }
};

export default Auth;