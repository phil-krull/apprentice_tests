var Photo = mongoose.model('photo');
var Subject = mongoose.model('subject');
var User = mongoose.model('user');
var fs = require('fs');

module.exports = {

  index: function(req, res){
    Photo.find({}).deepPopulate('_subject _user').sort('-likes').limit(10).lean().exec(function(errors, photos){
      if(errors){
        res.send(errors);
      } else {
        res.json(photos);
      }
    })
  },

  create: function(req, res){
    User.findOne({_id: req.params.user_id}, function(errors, user){
      if(errors){
        res.send(errors);
      } else {
        var newPhoto = new Photo(req.body);
        user.photos.push(newPhoto);
        user.save(function(errors){
          if(errors){
            res.send(errors);
          } else {
            Subject.findOne({name: req.body.subject}, function(errors, subject){
              if(errors){
                res.send(errors);
              } else {
                if(!subject){
                  Subject.create({name: req.body.subject}, function(errors, subject){
                    newPhoto.img = req.body.img;
                    newPhoto._user = user._id;
                    newPhoto._subject = subject._id;
                    newPhoto.save(function(errors){
                      if(errors){
                        res.send(errors);
                      } else {
                        res.json(true);
                      }
                    })
                  })
                } else {
                  newPhoto._user = user._id;
                  newPhoto._subject = subject._id;
                  newPhoto.img = req.body.img;
                  newPhoto.save(function(errors){
                    if(errors){
                      res.send(errors);
                    } else {
                      res.json(true);
                    }
                  })
                }
              }
            })
          }
        })
      }
    })
  },

  show: function(req, res){
    Photo.find({_subject: req.params.subject_id}).lean().deepPopulate('_user _subject likes._user').exec(function(errors, photos){
      if(errors){
        res.send(errors);
      } else {
        res.json(photos);
      }
    })
  },

  like: function(req, res){
    User.findOne({_id: req.params.user_id}, function(errors, user){
      if(errors){
        res.send(errors);
      } else {
        Photo.findOne({_id: req.params.photo_id}, function(errors, photo){
          photo.likes.push(user);
          photo.save(function(errors){
            if(errors){
              res.send(errors);
            } else {
              Photo.find({}, function(errors, photos){
                if(errors){
                  res.send(errors);
                } else {
                  res.json(true);
                }
              })
            }
          })
        })
      }
    })
  },

  dislike: function(req, res){
    Photo.findOne({_id: req.params.photo_id}, function(errors, photo){
      if(errors){
        res.send(errors);
      } else {
        for(var idx=0; idx<photo.likes.length; idx++){
          if(photo.likes[idx] == req.params.user_id){
            photo.likes.splice(idx, 1);
            break;
          }
        }
        photo.save(function(errors){
          if(errors){
            res.send(errors);
          } else {
            res.json(true);
          }
        })
      }
    })
  }

}