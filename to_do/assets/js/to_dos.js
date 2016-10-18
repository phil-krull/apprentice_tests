$(document).ready(function(){

  $('#addTodo, .updateTodo, .deleteTodo, .completeTodo').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data){
        $('#to_dos').html(data);
        $('#addTodo').find('textarea').val('');
        addListeners();
      }
    })
  })

  $('#logout').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data){
        $('#main').html(data);
      }
    })
  })

  $('body').on('click', '.editTodo', function(){
    $(this).replaceWith('<textarea name="update_todo"></textarea>');
  })

  $('body').on('change', 'textarea[name="update_todo"]', function(){
    $(this).parent().submit();
    $(this).focus();
  })


})

function addListeners(){
  $('.updateTodo, .deleteTodo, .completeTodo').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data){
        $('#to_dos').html(data);
        addListeners();
      }
    })
  })
}
