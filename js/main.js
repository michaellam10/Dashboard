$(document).ready(function () {
  var numNotifications = $('.notification-num').text();
  if(numNotifications == '0') {
    $('.notification-bubble').toggle(false);
  }
  else {
    $('.notification-icon').toggle(false);
  }
});
