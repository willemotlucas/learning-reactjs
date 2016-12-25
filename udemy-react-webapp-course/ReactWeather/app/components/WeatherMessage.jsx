var React = require('react');

var WeatherMessage = React.createClass({

  render: function(){
    var temp = this.props.temp;
    var city = this.props.city;

    return (      
      <div>
        <p>It's {temp}°C in {city}</p>
      </div>
    );
  }

});

module.exports = WeatherMessage;