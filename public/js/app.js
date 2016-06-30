$(document).ready(function() {

//collapses navbar buttons into a hamburger menu
$(".button-collapse").sideNav();

//jQuery for update email button
$('#update').on('submit', function(e) {
  e.preventDefault();
  var userElement = $(this);
  var userName = userElement.attr('action');
  var teamData = userElement.serialize();
  $.ajax({
    method: 'PUT',
    name: userName,
    data: teamData
  }).done(function(data) {
    // get data returned from the PUT route
    console.log(data);

    // do stuff when the PUT action is complete
    userElement.remove();

    // or, you can redirect to another page
    window.location = '/profile';
  });
});






//geolocation listeners

// $('#byLocation').click(navigator.geolocation.getCurrentPosition(function(position) {
//   currentLocation(position.coords.latitude, position.coords.longitude);
//   $('#hiddenInput').text(currentLocation());
//   }))

//End of document.ready parentheses
});
