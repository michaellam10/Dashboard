$(document).ready(function() {

  // adjust client card alignment upon page load
  $('.client-card').each(function( index ) {
    var clientID = '#' + this.id;
    getPosition(document.querySelector(clientID));
  });

  // adjust project card container alignment upon page load
  var offsetProjectCardContainer = getProjectCardPosition(document.querySelector(".card"));

});

// adjust client card alignment upon window resizing
$(window).on('resize', function() {

  $('.client-card').each(function( index ) {
    var clientID = '#' + this.id;
    getPosition(document.querySelector(clientID));
  });
});

///////////////////////////////////////////////////////////////

//function definitions

function getPosition(client) {
   var coordinates=client.getBoundingClientRect();
   var x = coordinates.left;
   var client = client;
   translateClientExpand(x, client);
 }

 function translateClientExpand(x, client) {
   var clientCard = $(client).find("client-projects");
   var clientCardExpand = clientCard.prevObject[0].children[1].children[0];
   $(clientCardExpand).css('left', '-' + x + 'px');
 }

 function getProjectCardPosition(card) {
    var coordinates = card.getBoundingClientRect();
    var x  = coordinates.left;
    translateProjectCard(x);
    return x;
  }

 function translateProjectCard(x) {
   $(".project-card-container").css('margin-left', x + 'px');
 }
