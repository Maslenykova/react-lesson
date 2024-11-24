import React, {Component} from 'react';
import Online from './Online';
import Offline from './Offline';



class Status extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOnline: false , 
      };
    }
  
  
    render() {
if(this.state.isOnline !== true){
   return (<Offline/>)
}  
return (<Online/>)  
}
  }
  
  export default Status;