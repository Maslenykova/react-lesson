
import React, {Component} from 'react';

class UserProfile extends Component {
  render(){
    if(!this.props.userData){
      return null;
  }
  const {avatar_url, name, location} = this.props.userData;
  return(
      <div className="user">
      <img
        alt="User Avatar"
        src={avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  )
  }
     
    }


export default UserProfile;