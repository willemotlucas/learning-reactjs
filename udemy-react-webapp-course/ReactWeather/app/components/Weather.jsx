var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false
    };
  },

  handleGetWeather: function(city){
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        city,
        temp,
        isLoading: false
      });
    }, function(err){
      this.setState({isLoading: false});
      alert('Error:', err);
    });
  },

  render: function(){
    var {isLoading, temp, city} = this.state;

    var renderMessage = function(){
      if(isLoading){
        return <h3>Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage city={city} temp={temp}/>
      }
    }

    return (
      <div>
        <WeatherForm onGetWeather={this.handleGetWeather}/>
        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;