var React = require('react');

// We use stateless functional component
// and destructuring syntax directly in function parameters

var WeatherMessage = ({temp, city}) => {
  return (      
    <div>
      <p>It's {temp}°C in {city}</p>
    </div>
  );
}

module.exports = WeatherMessage;