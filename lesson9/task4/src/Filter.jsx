import React from 'react';
const Filter = ({ filterText, count, onChange }) => {

  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        onChange={ (event) => {
            onChange(event.target.value); 
          }} 
        value={filterText} 
      />
    </div>
  );
};

export default Filter;