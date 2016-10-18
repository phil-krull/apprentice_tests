$(document).ready(function(){

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data){
        $('#allNotes').html(data);
        $('#addNote').find('form')[0].reset();
        addListeners();
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
      }
    })
  })
}