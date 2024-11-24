import React, {Component} from 'react';

const Offline = ({ reconnect }) => {
 
        return (
            <div className="status">
              <span className="status__text" >Offline</span>
              <button className="status__btn" onClick={reconnect}>
                Reconnect
              </button>
            </div>
          );
};

export default Offline;