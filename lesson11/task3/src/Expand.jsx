import React from 'react';

const Expand = ({ isOpen, children, title, onOpen, onClose }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn"
          onClick={isOpen ? onClose : onOpen} >
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  );
};

export default Expand;