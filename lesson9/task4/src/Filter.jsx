import React, { Component } from 'react';

class Filter extends Component {
  handleChange = (event) => {
    const { onChange } = this.props;
    const newValue = event.target.value;

    onChange(newValue);
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