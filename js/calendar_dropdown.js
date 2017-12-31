$('#datepicker1').datepicker({
    uiLibrary: 'bootstrap',
    iconsLibrary: 'materialicons',
    icons: {
      rightIcon: '<img id="datepicker-calendar-icon" src="images/svgs/calendar-icon.svg" alt="calender icon" />'
    },
    format: 'dd mmm yyyy'
});

$('#datepicker2').datepicker({
    uiLibrary: 'bootstrap',
    iconsLibrary: 'materialicons',
    icons: {
      rightIcon: '<img id="datepicker-calendar-icon" src="images/svgs/calendar-icon.svg" alt="calender icon" />'
    },
    format: 'dd mmm yyyy'
});


$('.gj-datepicker').css({'display':'flex', 'height':'100%'})
$('#datepicker1, #datepicker2').css({
  'height':'100%',
  'border':'none',
  'box-shadow':'none',
  'padding-left':'15px',
  'padding-right':'15px',
  'color':'#6a7c8f',
  'font-size':'15px'
})

$('.datepicker').each(function( index ) {
  var datepickerID = '#' + this.id;
  var datepickerIconID = $(this).siblings();
  $(datepickerIconID).insertBefore( $(datepickerID) );
});

$('.conversation-notes').each(function( index ) {
  var dateNotesID = this.id;

  $('#' + dateNotesID).focus(function() {
      if(document.getElementById(dateNotesID).value === ''){
          document.getElementById(dateNotesID).value +='• ';

          var textarea = document.getElementById(dateNotesID);
          moveCaretToEnd(textarea);

          // Work around Chrome's little problem

          window.setTimeout(function() {
              moveCaretToEnd(textarea);
          }, 1);
  	}
  });

  $('#' + dateNotesID).keyup(function(event){
  	var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
          document.getElementById(dateNotesID).value +='• ';

  	}
  	var txtval = document.getElementById(dateNotesID).value;
  	if(txtval.substr(txtval.length - 1) == '\n'){
  		document.getElementById(dateNotesID).value = txtval.substring(0,txtval.length - 1);

    }
  });
})

function moveCaretToEnd(el) {

    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}
