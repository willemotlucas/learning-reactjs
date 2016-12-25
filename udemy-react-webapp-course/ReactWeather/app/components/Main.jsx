var React = require('react');
var Nav = require('Nav');

// We use a stateless functional component

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;