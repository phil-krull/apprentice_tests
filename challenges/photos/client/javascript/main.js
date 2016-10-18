var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.directive('fileInput', ['$parse', function ($parse){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      element.bind('change', function(){
        $parse(attrs.fileInput)
        .assign(scope,element[0].files)
        scope.$apply();
      })
    }
  }
}])

app.config(function ($routeProvider){
  $routeProvider

  .when('/login', {
    templateUrl: 'partials/user/new.html',
    controller: 'u_newController',
    controllerAs: 'u_newCtrl'
  })
  .when('/user/:id', {
    templateUrl: 'partials/user/show.html',
    controller: 'u_showController',
    controllerAs: 'u_showCtrl'
  })
  .when('/photo', {
    templateUrl: 'partials/photo/index.html',
    controller: 'p_indexController',
    controllerAs: 'p_indexCtrl'
  })
  .when('/create', {
    templateUrl: 'partials/photo/new.html',
    controller: 'p_newController',
    controllerAs: 'p_newCtrl'
  })
  .when('/show/:id', {
    templateUrl: 'partials/photo/show.html',
    controller: 'p_showController',
    controllerAs: 'p_showCtrl'
  })
  .otherwise({
    redirectTo: '/login'
  })
})