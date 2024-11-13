/* eslint-disable no-undef */

const rootElement = document.querySelector('#root');
const greetElement = React.createElement(
    'div',
    {className: 'greeting'},
    'Hello, React!'
);

ReactDOM.render(greetElement, rootElement);