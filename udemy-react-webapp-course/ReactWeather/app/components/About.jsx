var React = require('react');

/*var About = React.createClass({

  render: function(){
    return (
      <h3>About page</h3>
    );
  }

});*/

/*
 * In case of a presentational component which only defines the render function,
 * we can use a stateless functional component. This is possible since the component
 * doesn't maintain any states.
 */

var About = (props) => {
    return (
      <h3>About page</h3>
    );
}

module.exports = About;