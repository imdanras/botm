$(document).ready(function() {

//collapses navbar buttons into a hamburger menu
$(".button-collapse").sideNav();

//jQuery for update email button
$('#update').on('submit', function(e) {
  e.preventDefault();
  var userElement = $(this);
  var userEmail = userElement.attr('action');
  $.ajax({
    method: 'PUT',
    url: $(this).attr('action'),
    data: {
      email: $('#userEmail').val(),
    }
  }).done(function(data) {
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
