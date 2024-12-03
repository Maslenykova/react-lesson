import React, { Component } from 'react';

class Filter extends Component {
 
  state = { value: '' };

  handleChange = (event) => {
    const { onChange } = this.props; 
    const newValue = event.target.value; /

    this.setState({ value: newValue }); /
    onChange(newValue); 
  };

  render() {
    const { count } = this.props; 
    const { value } = this.state; 

    return (
      <div className="filter">
        <span className="filter__count">{count}</span> 
        <input
          type="text"
          className="filter__input"
          onChange={this.handleChange} 
          value={value} 
        />
      </div>
    );
  }
}

export default Filter;