/* global $ */
$(document).ready(function () {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function (data) {
      $('#quote').append(data.quote)
      $('#author').append('by: ' + data.author)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('error ', errorThrown)
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader('X-Mashape-Authorization', 'oE7FNEwT2kmsh9idR52AuL4lZvtYp1obD8ljsnHPir19SwVZRP')
    }
  })
  $.get('https://natgeoapi.herokuapp.com/api/dailyphoto')
  .done(function (data) {
    $(' #background ').css('background-image', 'url(https:' + data.src + ')')
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(errorThrown)
  })
})

// https://maps.googleapis.com/maps/api/timezone/json?location=1.290270,103.851959&timestamp=1331161200&key=AIzaSyCbqvOWog_gl3msL8Ob7wBL94ITSNx2qd8
var today = new Date(new Date().getTime())
var day = today.getDate()
var month = today.getMonth()
var time = ((today.getHours() + 11) % 12 + 1)
var minutes = today.getMinutes()
var am = true
if (time > 12) {
  am = false
  time -= 12
} else if (time === 12) {
  am = true
} else if (time === 0) {
  time = 12
}

var months = [ 'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December' ]

// var utcDate = new Date(new Date().getTime())
$('#time').append(day + ' ' + months[parseInt(month)] + ' ' + time + ':' + minutes + ' ' + (am ? 'a.m.' : 'p.m.'))
