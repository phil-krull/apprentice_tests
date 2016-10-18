var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/client')));

// app.set('views', path.join(__dirname, '/client/views'));

// app.set('view engine', 'ejs');

// app.get('/', function(req,res){
//   res.render('index');
// })

var server = app.listen(8000, function(){
  console.log('Listening on port 8000');
})

var io = require('socket.io').listen(server);

  var users = [];
  var chatrooms = [];
  var newUsers = {};

io.sockets.on('connection', function(socket){
  console.log(socket.id);
  console.log(newUsers);
  console.log(socket);

  socket.on('newUser', function(data){
    users.push({user: data.user, socketId: socket.id});
    newUsers[data.user] = socket.id;
    console.log(newUsers);
    io.emit('newUser', {allusers: users, allchatrooms: chatrooms})
  })

  socket.on('newChatroom', function(data){
    chatrooms.push(data.chatroom);
    io.emit('newChatroom', {allchatrooms: chatrooms});
  })

  socket.on('joinRoom', function(data){
    console.log(data.chatroom);
    socket.emit('chatrooms', {chatrooms: chatrooms});
  })

  socket.on('privateChat', function(data){
    console.log(data.message);

    console.log(newUsers[data.toUser]);
    var id = newUsers[data.toUser];
    // socket.broadcast.to('id').emit('privateChat', {message: 'your eyes only'});
    io.sockets.in(id).emit('privateChat', {message: 'your eyes only'});
  })


})
