import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';
import './index.scss'


class App extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Fort',
    }
  };
handleChange = event => {
  const {name, value} = event.target;
  this.setState({
    userData: {
      ...this.state.userData,
      [name]: value,
    }
  })
}

  render(){
    const { userData } = this.state;
    return(
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userData={userData}/>
          <Profile 
          userData={userData}
          handleChange={this.handleChange}/>
        </main>
        </div>
          )
  }

}

export default App;