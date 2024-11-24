import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Mailbox from "./Mailbox";
import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(<Mailbox unreadMessages={[]}/>, rootElem);