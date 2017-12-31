$(document).ready(function() {
  $('.employee-card').click(function() {
    var selectedEmployee = this.id;
    var employeeID = '#' + this.id;

    $(employeeID).addClass("selected").siblings().removeClass("selected");

  });

  $('.milestone-review-num').click(function() {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $('.setup-step.active').prevAll().children(".step-number, .step-connection").css({'background-color':'#2e94ff','border-color':'#2e94ff'});
  $('.setup-step.active').prevAll().children(".step-number").children().replaceWith("<i class='material-icons'>check</i>");
  $('.setup-step.active').prevAll().children(".step-number").children().css({'font-size':'17px','color':'#ffffff'});
})
