import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from "./UsersList";
import './index.scss';

const rootElem = document.querySelector('#root');

const users = [
    {
      id: 'id-0',
      age: 21,
      name: 'Bob',
    },
    {
      id: 'id-1',
      age: 17,
      name: 'Tom',
    },
    {
      id: 'id-2',
      age: 18,
      name: 'Tad',
    },
    {
      id: 'id-3',
      age: 45,
      name: 'Sam',
    },
  ];
  

ReactDOM.render(<UsersList users={ users }/>, rootElem);