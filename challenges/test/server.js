var express = require('express');
var app = express();
bodyParser = require('body-parser');
mongoose = require('mongoose');
path = require('path');

app.use(express.static(path.join(__dirname, './client')));

app.use(bodyParser.json());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('listening on port 8000........')
})