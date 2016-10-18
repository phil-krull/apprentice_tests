app.controller('u_newController', function(userFactory, $location, $scope){
  var self = this;
  self.session;

  userFactory.getSession(function(response){
    if(response.status){
      self.session = response.sessionUser;
    } else {
      $scope.errors = response.errors;
      $location.path('/login');
    }
  })

  $scope.create = function(){
    userFactory.create($scope.newUser, function(response){
      if(response.status){
        self.session = response.sessionUser;
        $location.path('/photo');
      } else {
        $scope.errors = response.errors;
      }
    })
    $scope.newUser = {};
  }

  $scope.login = function(){
    userFactory.login($scope.loginUser, function(response){
      if(response.status){
        self.session = response;
        $location.path('/photo');
      } else {
        $scope.errors = response.errors;
      }
    })
    $scope.loginUser = {};
  }

  $scope.logout = function(){
    userFactory.logout(function(session_info){
    self.session = session_info;
    $location.path('/');
    })
  }
})