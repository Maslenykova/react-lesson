import React, {Component} from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends Component{
   state = {
    user: null,
   }
   componentDidMount(){
    this.fetchUser(this.props.userId)
   }

   fetchUser = userId =>{
    fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json())
    .then(userData => {
        this.setState({
            userData,
        })
    });
   }

    render(){
       
        return(
            <div className="page">
                <header className="header">
                <UserMenu userData ={this.state.userData}/>
                </header>
                <UserProfile userData ={this.state.userData}/>
               
            </div>
        );
    }
}

export default App;