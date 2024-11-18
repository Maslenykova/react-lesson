import React from 'react';
import './index.scss';
import moment from 'moment';


const formatDate = date => moment(date).format('DD MMM YYYY');

function Profile(props) {
  return (
    <div className="profile">
     <div className='profile__name'>{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate(props.date)} in London`}</div>
    </div>
  );
}

export default Profile;