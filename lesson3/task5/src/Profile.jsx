import React from 'react';
import './index.scss';
import moment from 'moment';


function Profile(props) {
  const day = moment(props.birthDate).format('DD MMM YY');
  return (
    <div className="profile">
     <div className='profile__name'>{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${day} in ${props.userData.birthPlace}`}</div>
    </div>
  );
}

export default Profile;