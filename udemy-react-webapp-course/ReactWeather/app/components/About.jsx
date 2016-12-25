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
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a Weather application built on React.</p>
        <p>Here are some tools I used:</p>
        <ul>
          <li><a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used</li>
          <li><a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to fetch weather by city name</li>
        </ul>
      </div>
    );
}

module.exports = About;