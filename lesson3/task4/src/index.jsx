import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

const rootElem = document.querySelector('#root');


ReactDOM.render(
    <Greeting firstName="John" lastName="Doe" birthDate="2006-11-14" />,
    rootElem
  );