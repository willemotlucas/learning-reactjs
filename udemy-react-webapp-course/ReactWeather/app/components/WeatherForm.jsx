var React = require('react');

var WeatherForm = React.createClass({

  onSubmitForm: function(event){
    event.preventDefault();
    var cityRef = this.refs.city;
    var city = cityRef.value;
    console.log('City: ' + cityRef);

    if(typeof city === 'string' && city.length > 0){
      cityRef.value = '';
      this.props.onGetWeather(city);
    }
  },

  render: function(){
    return (
      <div> 
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref="city"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;