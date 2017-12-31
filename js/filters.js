$(document).ready(function() {
  alignFilterOptions();
})

$(window).on('resize', function() {
  alignFilterOptions();
});

function alignFilterOptions() {
  var x = getProjectCardPosition(document.querySelector(".card"));
  $(".filter-options").css('margin-right', x + 'px');
  $(".filter-options").css('margin-left', x + 'px');
}
