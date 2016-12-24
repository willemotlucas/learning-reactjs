var axios = require('axios');

// b8e6e509b96f1b400e3937090bdf3dfe

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b8e6e509b96f1b400e3937090bdf3dfe&units=metric';

module.exports = {
  getTemp: function(city){
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

    return axios.get(requestUrl).then(function(response){
      if(response.data.message && response.data.code){
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function(response){
      throw new Error(response.data.message);
    });
  }
}