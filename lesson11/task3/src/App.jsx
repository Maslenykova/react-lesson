import React, { Component} from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };


 render(){
  return (
    <div className="expand__content">
     <Expand title='Some title'
       isOpen={this.state.isOpen}
       onOpen={this.handleOpen}
       onClose={this.handleClose}
       >
     <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
     </Expand>
     
    </div>
  );
 }
};

export default App;