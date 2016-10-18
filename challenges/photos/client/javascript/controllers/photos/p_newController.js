app.controller('p_newController', function($http, photoFactory, userFactory, $location, $scope){
  var self = this;
  self.session;

  userFactory.getSession(function(response){
    if(response.status){
      self.session = response.sessionUser;
      photoFactory.getSubjects(function(subjects){
        $scope.subjects = subjects;
      })
    } else {
      $location.path('/login');
    }
  })

  $scope.uploadFiles = function(){
    if(!$scope.newPhoto || !$scope.files){
      $scope.errors = ['Subject and photo are required'];
    } else {
      var fd = new FormData()
      angular.forEach($scope.files, function(file){
        fd.append("file", file);
      })
      fd.append("subject", $scope.newPhoto.subject);
      $http.post('/photos/' + self.session.user_id, fd, {
        transformRequest:angular.identity,
        headers:{'Content-Type': undefined}
      })
      .success(function(response){
        if(response){
          $scope.newPhoto = {};
          $location.path('/photo');
        }
      })
    }
  }
})