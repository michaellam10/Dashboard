$(document).ready(function () {
  $('.nav-bar-toggle').click(function () {
    $('#nav-bar').toggleClass('active');
    $('.nav-bar-mobile-header').toggle();

    if($('#sidebar').hasClass('active')){
      $('#sidebar').toggleClass('active');
      $('#sidebar-collapse-button').toggleClass('active');
    }
  });

  $('#navbar-collapse-button').click(function() {
    $('#nav-bar').toggleClass('active');
    $('.nav-bar-mobile-header').toggle();
  })
});
