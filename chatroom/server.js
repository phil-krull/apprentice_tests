var express = require('express');
var app = express();
var path = require('path');



app.use(express.static(path.join(__dirname, '/client/static')));

app.set('views', path.join(__dirname, '/client/views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
})

var server = app.listen(8000, function(){
  console.log('listening on port 8000')
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log(socket.id);

  socket.on('newUser', function(data){
    socket.broadcast.emit('newUser', {name: data.name});
  })

  socket.on('newChat', function(data){
    io.emit('newChat', {name: data.name, comment: data.comment})
  })

  socket.on('userLeft', function(data){
    socket.broadcast.emit('userLeft', {name: data.name});
  })

})

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