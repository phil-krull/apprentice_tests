var app = angular.module('myApp', ['ngRoute']);

  app.config(function ($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'partials/chatroom.html',
    controller: 'chatroomController',
    controllerAs: 'chatroomCtrl'
  })
  .otherwise({
    redirectTo: 'partials/chatroom.html'
  })
})


// $(document).ready(function(){
//   var user = prompt("Enter your name");

//   var socket = io.connect();

//   if(user){
//     socket.emit('newUser', {user: user});
//   }

//   $('button').on('click', function(){
//     var chatroom = $('input').val();
//     socket.emit('newChatroom', {chatroom: chatroom});
//     $('input').val('');
//   })

//   socket.on('newUser', function(data){
//     $('#users').append('<p>' + data.user + ' has joined the chatroom.</p>');
//   })

//   socket.on('newChatroom', function(data){
//     var chatrooms = '';
//     for(var idx = 0; idx < data.chatrooms.length; idx++){
//       chatrooms += '<p>' + data.chatrooms[idx] + ' <button type="submit" class="groupchat" value="' + data.chatrooms[idx] + '">Enter</button></p>';
//     };
//     $('#chatrooms').html(chatrooms);
//   })

//   $('.groupchat').on('click', function(){
//     var room = $(this).attr('value');
//     socket.emit('joiningRoom', {room: room});
//   })

// })


// // sending to sender-client only
// socket.emit('message', "this is a test");

// // sending to all clients, include sender
// io.emit('message', "this is a test");

// // sending to all clients except sender
// socket.broadcast.emit('message', "this is a test");

// // sending to all clients in 'game' room(channel) except sender
// socket.broadcast.to('game').emit('message', 'nice game');

// // sending to all clients in 'game' room(channel), include sender
// io.in('game').emit('message', 'cool game');

// // buggy
// // sending to sender client, only if they are in 'game' room(channel)
// socket.to('game').emit('message', 'enjoy the game');

// // sending to all clients in namespace 'myNamespace', include sender
// io.of('myNamespace').emit('message', 'gg');

// // sending to individual socketid
// socket.broadcast.to(socketid).emit('message', 'for your eyes only');










