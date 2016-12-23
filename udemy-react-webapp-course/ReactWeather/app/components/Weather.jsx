var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      temp: '34°C',
      city: 'Blois'
    };
  },

  handleGetWeather: function(city){
    this.setState({
      temp: "32°C",
      city
    });
  },

  render: function(){
    var temp = this.state.temp;
    var city = this.state.city;

    return (
      <div>
        <WeatherForm onGetWeather={this.handleGetWeather}/>
        <WeatherMessage city={city} temp={temp}/>
      </div>
    );
  }

});

module.exports = Weather;