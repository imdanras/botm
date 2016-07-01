$(document).ready(function() {
// collapses navbar buttons into a hamburger menu
  $('.button-collapse').sideNav();

// jQuery for update email button
  $('#update').on('submit', function(e) {
    e.preventDefault();
    var userElement = $(this);
    var userEmail = userElement.attr('action');
    $.ajax({
      method: 'PUT',
      url: $(this).attr('action'),
      data: {
        email: $('#userEmail').val()
      }
    }).done(function(data) {
      window.location = '/profile';
    });
  });

$('.deleteBtn').on('click', function(e) {
  e.preventDefault();
  var that = this;
  var url = $(this).attr('action');
  // var id = $(this).parent();
  console.log('url ', url);

  $.ajax({
    method: 'DELETE',
    url: url ,
    success: function(response) {
      console.log('yay delete');
      $(that).parent().parent().remove();
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log('delete did not work');
    }
  });
});



// geolocation listeners

  function success(pos) {
    var crd = pos.coords;
    console.log(crd.latitude + ',' + crd.longitude);
    $('#ll').val(crd.latitude + ',' + crd.longitude);
    return (crd.latitude + ',' + crd.longitude);
  }

// function error(err) {
//   console.warn('ERROR(' + err.code + '): ' + err.message);
// };

  navigator.geolocation.getCurrentPosition(success);

// $('#byLocation').click(navigator.geolocation.getCurrentPosition(function(position) {
//   currentLocation(position.coords.latitude, position.coords.longitude);
//   $('#hiddenInput').text(currentLocation());
//   console.log(position);
//   }))

// End of document.ready parentheses
});
