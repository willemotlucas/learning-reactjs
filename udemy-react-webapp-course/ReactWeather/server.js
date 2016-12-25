var express = require('express');

// Create our app
var app = express();
// Binding to the port given by Heroku, or 3000 for development
const PORT = process.env.PORT || 3000;

// We need to redirect trafic from HTTPS to HTTP in order to use 
// OpenWeatherMap API
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Server is running on port ' + PORT);
});