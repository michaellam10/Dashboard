$(document).ready(function () {

    $('#sidebar').niceScroll({
        cursorcolor: '#53619d', // Changing the scrollbar color
        cursorwidth: 4, // Changing the scrollbar width
        cursorborder: 'none', // Removing the scrollbar border
    });

    $('.notifications').on('click', function () {
        // open or close sidebar
        $('#sidebar').toggleClass('active');
        $('#sidebar-collapse-button').toggleClass('active');

        if($('#nav-bar').hasClass('active')){
          $('#nav-bar').toggleClass('active');
          $('.nav-bar-mobile-header').toggle();
        }

        $("#sidebar-collapse-button").click(function() {
          if( $("#sidebar").hasClass("active")){
            $("#sidebar").removeClass("active");
          }
        });
    });

    var reviewPanels = $('#sidebar').find('.sidebar-reviews-panel-container');
    var reviewTab = document.querySelector(".sidebar-tab.reviews");
    var invoicePanels = $('#sidebar').find('.sidebar-invoices-panel-container');
    var invoiceTab = document.querySelector(".sidebar-tab.invoices");

    $('.reviews').on('click', function() {
      if($('.sidebar-reviews-panel-container').hasClass('active') == false){
        $(invoicePanels).toggleClass('active');
        $(reviewPanels).toggleClass('active');

        $(invoiceTab).toggleClass("active");
        $(reviewTab).toggleClass("active");
      }
    })

    $('.invoices').on('click', function() {
      if($('.sidebar-invoices-panel-container').hasClass('active') == false){
        $(reviewPanels).toggleClass('active');
        $(invoicePanels).toggleClass('active');

        //black underline
        $(reviewTab).toggleClass("active");
        $(invoiceTab).toggleClass("active");
      }
    })

});
