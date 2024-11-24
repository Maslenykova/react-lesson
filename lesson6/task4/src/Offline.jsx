import React from 'react';

const Offline = ({ onReconnect }) => {
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={onReconnect}>
        Reconnect
      </button>
    </div>
  );
};

export default Offline;