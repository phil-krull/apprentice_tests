app.factory('userFactory', function($http, $routeParams){

  var sessionUser = {loggedIn: false};
  return{
    create: function(user, callback){
      $http.post('/users', user).success(function(response){
        if(response.status){
          sessionUser = response.sessionUser;
        }
        callback(response);
      })
    },

    show: function(photo_user_id, user_id, callback){
      $http.get('/users/' + photo_user_id + '/' + user_id).success(function(response){
        callback(response);
      })
    },

    getSession: function(callback){
      $http.get('/users').success(function(response){
        sessionUser = response;
        callback(sessionUser);
      })
    },

    login: function(user, callback){
      $http.post('/users/login', user).success(function(response){
        if(response.status){
          sessionUser = response;
        }
        callback(response);
      })
    },

    logout: function(callback){
      $http.post('/users/logout').success(function(session_info){
        sessionUser = session_info;
        callback(session_info);
      })
    }
  }
})