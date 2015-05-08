$(document).ready(function(){

// displays the "continue" button after user keys up while in input field
// dope!
  $(".household-size").keyup(function() {
    if ($('.household-size').length > 0 && $('.household-size').val() != '') {
      $('.continue').removeClass('nope');
    }
    else {
      $('.continue').addClass('nope');
    }
  });

  $('.freq').change(function(){
      if ($('.freq').val() != 'hour') {
        $('.button-container').removeClass('nope');
        $('.continue').removeClass('nope');
      }
      else if ($('.freq').val() == 'hour') {
        $('.specific').removeClass('nope');
      }
      else {
      }
  });

  $(".hours").keyup(function() {
    if ($('.hours').length > 0 && $('.hours').val() != '') {
      $('.continue').removeClass('nope');
    }
    else {
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
