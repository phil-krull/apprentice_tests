$(document).ready(function(){


  $('.pagination').click(function(e){
    $('.create').attr('value', $(this).html());
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/notes/index',
      data: {page: $(this).html()},
      success: function(data){
        $('#allNotes').html(data);
        addListeners();
        pagListeners();
      }
    })
  })

  $('form').submit(function(e){
    var formdata;
    if($(this).attr('name') == 'create'){
      formdata = $(this).serialize() + '&current_page=' + $(this).attr('value');
    } else {
      formdata = $(this).serialize()
    }
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formdata,
      success: function(data){
        $('#allNotes').html(data);
        $('#addNote').find('form')[0].reset();
        addListeners();
        pagListeners();
      }
    })
  })

  $('body').on('click', '.editNote', function(){
    $(this).replaceWith('<textarea name="update_note"></textarea>');
  })

  $('body').on('change', 'textarea[name="update_note"]', function(){
    $(this).parent().submit();
    $(this).focus();
  })
})

function addListeners(){
  $('.updateNote, .deleteNote').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data){
        $('#allNotes').html(data);
        addListeners();
        pagListeners();
      }
    })
  })
}

function pagListeners(){
  $('.pagination').click(function(e){
  $('.create').attr('value', $(this).html());
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/notes/index',
      data: {page: $(this).html()},
      success: function(data){
        $('#allNotes').html(data);
        addListeners();
        pagListeners();
      }
    })
  })
}