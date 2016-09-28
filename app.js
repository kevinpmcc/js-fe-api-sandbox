$(function() {
  $("#search").click( function()
      {
        var searchTerm = $('#inputfield').val();
        cinemasApiSearch(searchTerm);
      }
      );
});

function listCinemas(cinemasArray){
  cinemasArray.forEach(function(cinema, index){
    $("body").append("<p>" + cinema + "</p>")
  }
  )
}

function cinemasApiSearch(searchTerm) {
  $.getJSON({
    url: 'http://localhost:3000/api/v1/cinemas/search?postcode='+ searchTerm,
  }) .done(function(res) {
      listCinemas(res.cinemas);
  })
  .fail(function(err) {
    console.log('Error: ' + err.status);
  });
}


