var React = require('react');

var WeatherForm = React.createClass({

  onSubmitForm: function(event){
    event.preventDefault();
    var cityRef = this.refs.city;
    var city = cityRef.value;
    
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
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;