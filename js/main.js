$(document).ready(function(){

  var FAMILY_SIZE = 0;
  var HOW_MUCH = 0;
  var FREQ_SELECTION;
  var FREQ_MULTIPLIER;
  var WEEKLY_HOURS = 1;
  var YEARLY_GROSS;
  var MONTHLY_GROSS;
  var RENT_SUGGESTION;
  var LA_MFI;
  var USER_MFI;
  var MFI_ROUNDED_UP;

  function calcFreqMulti(i) {
    switch (i) {
      case 'year':
        FREQ_MULTIPLIER = 1;
      break;

      case 'month':
        FREQ_MULTIPLIER = 12;
      break;

      case 'twiceamonth':
        FREQ_MULTIPLIER = 24;
      break;

      case 'twoweeks':
        FREQ_MULTIPLIER = 26;
      break;

      case 'week':
        FREQ_MULTIPLIER = 52;
      break;

      case 'hour':
        FREQ_MULTIPLIER = 52;
      break;
    }
  };

  function doRentSuggestionMath(i) {
    YEARLY_GROSS = HOW_MUCH * FREQ_MULTIPLIER * WEEKLY_HOURS;
    MONTHLY_GROSS = YEARLY_GROSS/12;
    RENT_SUGGESTION = (MONTHLY_GROSS/3).toFixed([0]);

    switch (true) {
      case (i == 1):
        LA_MFI = 58100;
      break;

      case (i == 2):
        LA_MFI = 66400;
      break;

      case (i == 3):
        LA_MFI = 74700;
      break;

      case (i == 4):
        LA_MFI = 83000;
      break;

      case (i == 5):
        LA_MFI = 89700;
      break;

      case (i == 6):
        LA_MFI = 96300;
      break;

      case (i == 7):
        LA_MFI = 103000;
      break;

      case (i >= 8):
        LA_MFI = 109600;
      break;
    }

    USER_MFI = ((YEARLY_GROSS/LA_MFI) * 100).toFixed([0]);

    switch (true) {
      case (USER_MFI <= 30):
        MFI_ROUNDED_UP = 30;
      break;

      case (USER_MFI > 30 && USER_MFI <= 40):
        MFI_ROUNDED_UP = 40;
      break;

      case (USER_MFI > 40 && USER_MFI <= 50):
        MFI_ROUNDED_UP = 50;
      break;

      case (USER_MFI > 50 && USER_MFI <= 60):
        MFI_ROUNDED_UP = 60;
      break;

      case (USER_MFI > 60):
        MFI_ROUNDED_UP = 100;
      break;
    }

    if (MFI_ROUNDED_UP <= 60) {
      $('.mfi-exp').removeClass('hidden');
    }

    $('.search-link').attr('href', "https://losangeles.craigslist.org/search/apa?maxAsk=" + RENT_SUGGESTION);

  };


  // displays the "continue" button after user keys up while in input field
  // dope!
  $(".household-size").keyup(function() {
    if ($('.household-size').length > 0 && $('.household-size').val() != '') {
      $('#cont1').removeClass('nope');
      $('.progress').css("left", "-66%");
    }
    else {
      $('.continue').addClass('nope');
    }
  });

  $('.freq').change(function(){
      if ($('.freq').val() != 'hour') {
        $('.button-container').removeClass('nope');
        $('#cont2').removeClass('nope');
      }
      else if ($('.freq').val() == 'hour') {
        $('.specific').removeClass('nope');
      }
  });

  $(".hours").keyup(function() {
    if ($('.hours').length > 0 && $('.hours').val() != '') {
      $('#cont3').removeClass('nope');
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
    $('.progress').css("left", "-33%");
    $('.q1').addClass('hidden');
    $('.q2').removeClass('hidden');
    $('.continue').addClass('nope');
  });

  $('#cont2').click(function() {
    HOW_MUCH = $('.income').val();
    FREQ_SELECTION = $('.freq').val();
    calcFreqMulti(FREQ_SELECTION);
    doRentSuggestionMath(FAMILY_SIZE);
    $('.progress').css("left", "-0%");
    $('.q2').addClass('hidden');
    $('.sub-title').addClass('hidden');
    $('.results').removeClass('nope');
    $('.details').removeClass('nope');
    $('.mfi-status').removeClass('nope');
    $('.search-county').removeClass('nope');
    $('.monthly-rent-suggestion').append('$' + RENT_SUGGESTION);
    $('.mfi').append(USER_MFI);
    $('.mfi-rounded-up').append(MFI_ROUNDED_UP);


    // DO CALCULATION (exclude hours per week) and
    // show result

  });

    $('#cont3').click(function() {
      $('.progress').css("left", "-0%");
      $('.q2').addClass('hidden');
      $('.specific').addClass('hidden');
      $('.sub-title').addClass('hidden');
      $('.results').removeClass('nope');
      $('.details').removeClass('nope');
      $('.mfi-status').removeClass('nope');
      $('.search-county').removeClass('nope');
      HOW_MUCH = $('.income').val();
      FREQ_SELECTION = $('.freq').val();
      WEEKLY_HOURS = $('.hours').val();
      calcFreqMulti(FREQ_SELECTION);
      doRentSuggestionMath(FAMILY_SIZE);
      $('.monthly-rent-suggestion').append('$' + RENT_SUGGESTION);
      $('.mfi').append(USER_MFI);
      $('.mfi-rounded-up').append(MFI_ROUNDED_UP);
      // DO CALCULATION (include hours per week) and
      // show result
  });

});
