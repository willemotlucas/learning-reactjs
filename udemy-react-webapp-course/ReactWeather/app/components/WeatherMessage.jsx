var React = require('react');

var WeatherMessage = React.createClass({

  render: function(){
    var temp = this.props.temp;
    var city = this.props.city;
    
    // Initialize message to display
    var message = '';
    if(temp && city.length > 0)
      message = `It's ${temp}°C in ${city}!`;

    return (      
      <div>
        <p>{message}</p>
      </div>
    );
  }

});

module.exports = WeatherMessage;