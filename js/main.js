var main = function() {
  $('#message').fadeIn(1000);
  $('#search').fadeIn(1500);
  $('#takeit').hover(function() {
    $('#arrow2').fadeIn(1000);
    $('#quiz h2').css('margin-top', '60px');
    $('#quiz').css('color', '#e02227');
    $('#quiz a').css({
      'color': '#e02227',
      'font-weight': '600'
    });
  }, function() {
    $('#arrow2').hide();
    $('#quiz h2').css('margin-top', '30px');
    $('#quiz').css('color', '#aeaeae');
    $('#quiz a').css({
      'color': '#aeaeae',
      'font-weight': '400'
    });
  })
}

$(document).ready(main);
