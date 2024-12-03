import React, { Component } from 'react';

class Filter extends Component {
  handleChange = (event) => {
    this.props.onChange(event.target.value); 
  };

  render() {
    const { count, filterText } = this.props; 

    return (
      <div className="filter">
        <span className="filter__count">{count}</span> 
        <input
          type="text"
          className="filter__input"
          onChange={this.handleChange} 
          value={filterText} 
        />
      </div>
    );
  }
}

export default Filter;