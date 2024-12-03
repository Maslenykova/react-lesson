import React from 'react';

const Filter = ({ filterText, count, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value); 
  };

  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        onChange={handleChange} 
        value={filterText} 
      />
    </div>
  );
};

export default Filter;