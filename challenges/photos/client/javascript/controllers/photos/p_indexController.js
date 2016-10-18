app.controller('p_indexController', function(photoFactory, userFactory, $location, $scope){
  var self = this;
  self.session;

  userFactory.getSession(function(response){
    if(!response.status){
      $location.path('/login');
    } else {
      self.session = response.sessionUser;
      get_photos();
    }
  })

  function get_photos(){
    if(self.session.loggedIn){
      photoFactory.index(self.session.user_id, function(photos){
        for(p in photos){
          var userLikes = false;
          for(var idx=0; idx<photos[p].likes.length; idx++){
            if(photos[p].likes[idx] == self.session.user_id){
              userLikes = true;
            }
          }
          if(userLikes){
            photos[p].userLikes = true;
          } else {
            photos[p].userLikes = false;
          }
        }
        $scope.photos = photos;
      })
    } else {
      $location.path('/login');
    }
  }

  $scope.like = function(photo_id){
    photoFactory.like(photo_id, self.session.user_id, function(photos){
      get_photos();
    })
  }

  $scope.dislike = function(photo_id){
    photoFactory.dislike(photo_id, self.session.user_id,function(photos){
      get_photos();
    })
  }

})