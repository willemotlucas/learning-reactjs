var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Lucas',
  location: 'Blois'
};

var objTwo = {
  age: '22',
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate React.js application</h1>,
  document.getElementById('app')
);