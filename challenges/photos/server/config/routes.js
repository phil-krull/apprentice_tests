var User = require('./../controllers/users.js');
var Photo = require('./../controllers/photo.js');
var Subject = require('./../controllers/subject.js');
var multer = require('multer');

module.exports = function(app){
  app.post('/users', User.create);

  app.get('/users', User.getSession);

  app.post('/users/login', User.login);

  app.post('/users/logout', User.logout);

  app.get('/users/:photos_users_id/:user_id', User.show);

  app.get('/photos/:user_id', Photo.index);

  app.post('/photos/:user_id', multer({dest: './client/images'}).single('file'), function(req, res){
    req.body.img = req.file.filename
    Photo.create(req, res);
  });

  app.get('/photos/subject/:subject_id/:user_id', Photo.show);

  app.post('/photos/like/:photo_id/:user_id', Photo.like);

  app.post('/photos/dislike/:photo_id/:user_id', Photo.dislike);

  app.get('/subjects', Subject.index);
}