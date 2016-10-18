app.controller('chatroomController', function($scope, chatroomFactory){
  var socket = io.connect();
  var self = this;

  $scope.addUser = function(){
    chatroomFactory.newUser($scope.newUser.name)
    $scope.newUser = {};
  }

  $scope.addChatroom = function(){
    chatroomFactory.newChatroom(this.newChatroom.name);
    this.newChatroom = {};
  }

  $scope.privateChat = function(user, message){
    chatroomFactory.privateChat(user);
    $scope.newMessage = {};
  }

  this.joinChatroom = function(chatroom){
    chatroomFactory.joinChatroom(chatroom);
  }

  // Socket Listeners from server

    socket.on('newUser', function(data){
      console.log(data);
      $scope.allUsers = data.allusers;
      $scope.allChatrooms = data.allchatrooms;
      $scope.$apply();
    })

    socket.on('newChatroom', function(data){
      self.allChatrooms = data.allchatrooms;
      console.log(data);
    })

    socket.on('privateChat', function(data){
      console.log(data);
      $scope.privateChats = data;
      $scope.$apply();
    })

    socket.on('chatrooms', function(data){
      console.log(data);
    })

})