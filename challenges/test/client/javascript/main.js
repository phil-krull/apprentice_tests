var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/.html',
      controller: '',
      controllerAs: ''
    })
    .when('/', {
      templateUrl: 'partials/.html',
      controller: '',
      controllerAs: ''
    })
    .otherwise({
      redirectTo: '/'
    })
  })