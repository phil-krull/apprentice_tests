app.factory('photoFactory', function($http){
  return{

    index: function(user_id, callback){
      $http.get('/photos/' + user_id).success(function(response){
        callback(response);
      })
    },

    create: function(photo, user_id, callback){
      $http(photo).success(function(response){
        callback(response);
      })
    },

    show: function(subject_id, user_id, callback){
      $http.get('/photos/subject/' + subject_id + '/' + user_id).success(function(response){
        callback(response);
      })
    },

    like: function(photo_id, user_id, callback){
      $http.post('/photos/like/' + photo_id + '/' + user_id).success(function(response){
        callback(response);
      })
    },

    dislike: function(photo_id, user_id, callback){
      $http.post('/photos/dislike/' + photo_id + '/' + user_id).success(function(response){
        callback(response);
      })
    },

    getSubjects: function(callback){
      $http.get('/subjects').success(function(response){
        callback(response);
      })
    }

  }
})