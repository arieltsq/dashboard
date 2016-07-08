/* global $ */
$( document ).ready(function() {
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
  $(' #background ').css('background-image', 'url(https:' + data.src + ')');
}).fail(function (jqXHR, textStatus, errorThrown) {
  console.log(errorThrown)
})
});
