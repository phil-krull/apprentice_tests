$(document).ready(function(){
  var user = prompt('Enter your name');

  var socket = io.connect();

  socket.emit('newUser', {name: user});

  socket.on('newUser', function(data){
    $('#users').prepend('<p>' + data.name + ' has joined the chatroom.</p>');
  })

  $('button').on('click', function(){
    var chat = $('textarea').val();
    socket.emit('newChat', {name: user, comment: chat});
    $('textarea').val('');
  })

  socket.on('newChat', function(data){
    $('#chatroom').prepend('<p>' + data.name + ' says: ' + data.comment + '.</p>');
  })

  $(window).unload(function(){
    socket.emit('userLeft', {name: user});
  })

  socket.on('userLeft', function(data){
    $('#users').prepend('<p>' + data.name + ' has left the chatroom.</p>');
  })

})