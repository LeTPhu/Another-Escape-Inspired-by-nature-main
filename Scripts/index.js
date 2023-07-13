$(document).ready(function(){
    $(window).scroll(hideDL);
    $('html, body').animate({scrollTop:0},500);
  });
  function hideDL() {
     $('#img-f').hide('slow');
        };