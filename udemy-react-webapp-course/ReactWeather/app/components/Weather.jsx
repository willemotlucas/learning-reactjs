var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      temp: '',
      city: ''
    };
  },

  handleGetWeather: function(city){
    var that = this;
    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        city,
        temp
      });
    }, function(err){
      alert('Error:', err);
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