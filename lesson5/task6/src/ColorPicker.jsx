import React, { Component } from "react";
import "./index.scss";

const CORAL = "Coral";
const AQUA = "Aqua";
const BISQUE = "Bisque";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Red', 
    };
  }

  setTitle = (title) => {
    this.setState({ title }); 
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setTitle(CORAL)}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setTitle(AQUA)}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setTitle(BISQUE)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;