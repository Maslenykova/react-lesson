import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const rootElement = document.querySelector('#root');

const element = (
  <div className ="greeting">
    <h1 className ="greeting__title">Hello, world!</h1>
    <p className ="greeting__text">I am learning React</p>
  </div>
);
ReactDOM.render(element, rootElement);