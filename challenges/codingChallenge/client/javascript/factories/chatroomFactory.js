app.factory('chatroomFactory', function(){
  var socket = io.connect();
  var currentUser;
  return {

    newUser: function(newUser){
      currentUser = newUser;
      socket.emit('newUser', {user: newUser});
    },

    newChatroom: function(newChatroom){
      socket.emit('newChatroom', {chatroom: newChatroom});
    },

    privateChat: function(user, message){
      socket.emit('privateChat', {fromUser: currentUser, toUser: user, message: message});
    },

    joinChatroom: function(chatroom){
      socket.emit('joinRoom', {chatroom: chatroom});
    }

    }
  })