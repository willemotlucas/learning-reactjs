var React = require('react');

// We use stateless functional component
// and destructuring syntax directly in function parameters

var WeatherMessage = ({temp, city}) => {
  return (      
    <div>
      <h3 className="text-center">It's {temp}°C in {city}</h3>
    </div>
  );
}

module.exports = WeatherMessage;