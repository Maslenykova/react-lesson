import React from 'react';
import './index.scss';
import moment from 'moment';


function Profile(props) {
  const day = moment(props.birthDate).format('DD MMM YYYY');
  return (
    <div className="profile">
     <div className='profile__name'>{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="profile__birth">{`Was born ${day} in London`}</div>
    </div>
  );
}

export default Profile;