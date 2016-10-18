express = require('express');
mongoose = require('mongoose');
path = require('path');
Schema = mongoose.Schema;
bodyParser = require('body-parser');
bcrypt = require('bcrypt');
var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log('Listening on port 8000');
})