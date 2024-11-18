import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

const rootElem = document.querySelector('#root');

const userInfo = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "1985-06-19",
};

ReactDOM.render(
    <Greeting user = {userInfo}/>,
    rootElem
  );