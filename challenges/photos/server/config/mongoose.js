fs = require('fs');

mongoose.connect('mongodb://localhost/photos');

var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }
})