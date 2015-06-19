$(document).ready(function(){

  var FAMILY_SIZE = 0;
  var HOW_MUCH = 0;
  var FREQ_SELECTION;
  var FREQ_MULTIPLIER;
  var WEEKLY_HOURS = 1;

  function calcPayMulti(i) {
    switch (i) {
      case 'year':
        FREQ_MULTIPLIER = 1;
      ;

      case 'month':
        FREQ_MULTIPLIER = 12;
      ;

      case 'twiceamonth':
        FREQ_MULTIPLIER = 24;
      ;

      case 'twoweeks':
        FREQ_MULTIPLIER = 26;
      ;

      case 'week':
        FREQ_MULTIPLIER = 52;
      ;
    }
  };

  // displays the "continue" button after user keys up while in input field
  // dope!
  $(".household-size").keyup(function() {
    if ($('.household-size').length > 0 && $('.household-size').val() != '') {
      $('#cont1').removeClass('nope');
      console.log('Cont1 is SHOWN!');
    }
    else {
      $('.continue').addClass('nope');
    }
  });

  $('.freq').change(function(){
      if ($('.freq').val() != 'hour') {
        $('.button-container').removeClass('nope');
        $('#cont2').removeClass('nope');
        console.log('Cont2 is SHOWN!');
      }
      else if ($('.freq').val() == 'hour') {
        $('.specific').removeClass('nope');
      }
  });

  $(".hours").keyup(function() {
    if ($('.hours').length > 0 && $('.hours').val() != '') {
      $('#cont3').removeClass('nope');
      console.log('Cont3 is SHOWN!');
    }
    else {
      $('#cont3').addClass('nope');
    }
  });

  // click listener for continue button
  // will do more stuff later
  $('.continue').click(function() {
    $('.continue').addClass('nope');
  });

  $('#cont1').click(function() {
    FAMILY_SIZE = $('.household-size').val();
    console.log(FAMILY_SIZE);
    $('.progress').css("left", "-66%");
    $('.q1').addClass('hidden');
    $('.q2').removeClass('hidden');
    $('.continue').addClass('nope');
  });

  $('#cont2').click(function() {
    HOW_MUCH = $('.income').val();
    console.log(HOW_MUCH);
    FREQ_SELECTION = $('.freq').val();
    console.log(FREQ_MULTIPLIER);
    $('.progress').css("left", "-33%");
    $('.q2').addClass('hidden');

    // DO CALCULATION (exclude hours per week) and
    // show result

  });

    $('#cont3').click(function() {
      $('.progress').css("left", "-33%");
      $('.q2').addClass('hidden');
      $('.specific').addClass('hidden');
      // DO CALCULATION (include hours per week) and
      // show result
      console.log(HOW_MUCH);
      PAY_FREQ = $('.freq').val();
      console.log(PAY_FREQ);
  });

});
