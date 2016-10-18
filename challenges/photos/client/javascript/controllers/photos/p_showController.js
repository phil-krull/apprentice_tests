app.controller('p_showController', function(photoFactory, userFactory, $location, $routeParams, $scope){
  var self = this;
  self.session;
  self.subject_id;

  userFactory.getSession(function(response){
    if(!response.status){
      $location.path('/login');
    } else {
      self.session = response.sessionUser;
      self.subject_id = $routeParams.id;
      get_photos();
      // photoFactory.show($routeParams.id, self.session.user_id, function(photos){
      //   for(p in photos){
      //     var userLikes = false;
      //     for(var idx=0; idx<photos[p].likes.length; idx++){
      //       if(photos[p].likes[idx]._id == self.session.user_id){
      //         userLikes = true;
      //       }
      //     }
      //     if(userLikes){
      //       photos[p].userLikes = true;
      //     } else {
      //       photos[p].userLikes = false;
      //     }
      //   }
      //   $scope.photos = photos;
      // })
    }
  })

  function get_photos(){
    photoFactory.show(self.subject_id, self.session.user_id, function(photos){
      for(p in photos){
        var userLikes = false;
        for(var idx=0; idx<photos[p].likes.length; idx++){
          if(photos[p].likes[idx]._id == self.session.user_id){
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