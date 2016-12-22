var express = require('express');

// Create our app
var app = express();
var PORT = 3000;

app.use(express.static('public'));
app.listen(PORT, function(){
  console.log('Server is running on port ' + PORT);
});