var User = mongoose.model('user');

var sessionUser = {loggedIn: false};

module.exports = {

  create: function(req, res){
    User.findOne({email: req.body.email}, function(errors, user){
      if(user){
        res.json({status: false, errors: ['Email already in use']});
      } else if(req.body.password != req.body.confirm_password){
        res.json({status: false, errors: ['Passwords must match']});
      } else {
        var user = new User(req.body);
        user.save(function(errors){
          if(errors){
            console.log('in errors')
            var errorsArr = [];
            for(var idx in errors.errors){
              errorsArr.push(errors.errors[idx].message)
            }
            res.json({status: false, errors: errorsArr});
          } else {
              sessionUser = {
                loggedIn: true,
                user_id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
              }
              res.json({status: true, sessionUser: sessionUser});
          }
        })
      }
    })
  },

  show: function(req, res){
    User.findOne({_id: req.params.photos_users_id}).deepPopulate('photos photos._subject').lean().exec(function(errors, user){
      if(errors){
        res.send(errors)
      } else {
        res.json(user);
      }
    })
  },

  getSession: function(req, res){
    if(sessionUser.loggedIn){
      res.json({status: true, sessionUser: sessionUser});
    } else {
      res.json({status: false, sessionUser: sessionUser});
    }
  },

  login: function(req, res){
    if(req.body.email && req.body.password){
      console.log(req.body);
      User.findOne({email: req.body.email}, function(errors, user){
        console.log(user);
        if (!user){
          res.json({status: false, errors: ['Email does not exist']})
        } else if(errors){
          res.json({status: false, errors: ['Invalid email']});
        } else {
          if(user.validatePassword(req.body.password)){
            sessionUser = {
              loggedIn: true,
              user_id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email
            }
            res.json({status: true, sessionUser: sessionUser});
          } else {
            res.json({status: false, errors: ['Invalid email or password']});
          }
        }
      })
    } else {
      res.json({status: false, errors: ['Email and password is required']});
    }
  },

  logout: function(req, res){
    sessionUser = {loggedIn: false};
    res.json(sessionUser);
  }
}