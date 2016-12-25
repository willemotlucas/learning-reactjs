var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false
    };
  },

  handleGetWeather: function(city){
    
    this.setState({
      isLoading: true,
      errorMessage: undefined // Re-init error message for each search
    });

    openWeatherMap.getTemp(city).then((temp) => {
      this.setState({
        city,
        temp,
        isLoading: false
      });
    }, (err) => {
      this.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },

  render: function(){
    var {isLoading, temp, city, errorMessage} = this.state;

    var renderMessage = function(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage city={city} temp={temp}/>
      }
    }

    var renderError = function(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onGetWeather={this.handleGetWeather}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }

});

module.exports = Weather;