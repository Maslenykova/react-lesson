import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './FilterableProductTable';
const products =  [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ]

const rootElem = document.querySelector('#root');

ReactDOM.render(<FilterableProductTable products ={products}/>, rootElem);