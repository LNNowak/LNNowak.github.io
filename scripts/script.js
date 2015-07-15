$(document).ready(function(){
  $('div#mainDiv').append('<p>New, jQuery paragraph!</p>');
  $('div#thirdDiv').click(function() {
    $(this).animate({marginTop: '+=5%'}, 'slow');
  });
});
