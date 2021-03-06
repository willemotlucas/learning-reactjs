var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

/*
 * Object destructuring syntax, Similar to 
 * var Route = require('react-router').Route;
 * var Router = require('react-router').Router;
 * ...
*/

// Loading Foundation css styles
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Loading our custom css
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>    
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);