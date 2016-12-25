var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  onSearch: function(event){
    event.preventDefault();

    alert('not yet set up');
  },

  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/">Get Weather</IndexLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/examples">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search weather by city"/></li>
              <li><input type="submit" className="button" value="Search"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }

})

module.exports = Nav;