app.controller('u_showController',function(userFactory, photoFactory, $location, $scope, $routeParams){
  var self = this;
  self.session;
  self.photo_user_id;

  userFactory.getSession(function(response){
    if(response.status){
      self.session = response.sessionUser;
      self.photo_user_id = $routeParams.id;
      get_photos();
      // userFactory.show(self.session.user_id, function(user){
      //   for(var idx=0; idx<user.photos.length; idx++){
      //     var userLikes = false;
      //     for(var jdx=0; jdx<user.photos[idx].likes.length; jdx++){
      //       if(user.photos[idx].likes[jdx] == self.session.user_id){
      //         userLikes = true;
      //       }
      //     }
      //     if(userLikes){
      //       user.photos[idx].userLikes = true;
      //     } else {
      //       user.photos[idx].userLikes = false;
      //     }
      //   }
      //   $scope.user = user;
      // })
    } else {
      $scope.errors = response.errors;
      $location.path('/login');
    }
  })

  function get_photos(){
    userFactory.show(self.photo_user_id, self.session.user_id, function(user){
      for(var idx=0; idx<user.photos.length; idx++){
        var userLikes = false;
        for(var jdx=0; jdx<user.photos[idx].likes.length; jdx++){
          if(user.photos[idx].likes[jdx] == self.session.user_id){
            userLikes = true;
          }
        }
        if(userLikes){
          user.photos[idx].userLikes = true;
        } else {
          user.photos[idx].userLikes = false;
        }
      }
      $scope.user = user;
    })
  }

  $scope.like = function(photo_id){
    photoFactory.like(photo_id, self.session.user_id, function(photos){
      // $location.path('/photo');
      get_photos();
    })
  }

  $scope.dislike = function(photo_id){
    photoFactory.dislike(photo_id, self.session.user_id,function(photos){
      // $location.path('/photo');
      get_photos();
    })
  }

})