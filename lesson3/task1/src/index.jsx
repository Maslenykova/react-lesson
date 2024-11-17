import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./search.scss";
import Search from "./search";
const rootElem = document.querySelector('#root');
ReactDOM.render(<Search name="Tom"/>, rootElem);