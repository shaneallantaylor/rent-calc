$(document).ready(function(){

// displays the "continue" button after user keys up while in input field
// dope!
  $(".household-size").keyup(function() {
    if ($('.household-size').length > 0 && $('.household-size').val() != '') {
      $('.button-container').removeClass('nope');
      $('.continue').removeClass('nope');
    }
    else {
      $('.button-container').addClass('nope');
      $('.continue').addClass('nope');
    }
  });

  $('.freq').change(function(){
      if ($('.freq').val() != '') {
        $('.button-container').removeClass('nope');
        $('.continue').removeClass('nope');
      }
      else {
        $('.button-container').addClass('nope');
        $('.continue').addClass('nope');
      }
  });

// click listener for continue button
// will do more stuff later
  $('.continue').click(function(){
    $('.progress').css("left", "-66%");
    $('.q1').addClass('hidden');
    $('.q2').removeClass('hidden');
    $('.continue').addClass('nope');

  });
});
