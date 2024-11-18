import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
    name: "Tom",
    avatarUrl: 'https://avatars3.githubusercontent.com/u10001'
};

ReactDOM.render(
    <Comment
    user={userInfo} text="Good job" date={new Date()}/>,
    rootElement
);