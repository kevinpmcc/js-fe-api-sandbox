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
    $("body").append("<p><div class='cinema-name'>" + cinema.name + "</div><br>" +  listMovies(cinema.movies) + "<br></p>")
  }
  )
}

function listMovies(moviesArray){
  var returnString = ""
  moviesArray.forEach(function(movie, index) {
    returnString +=  "<div class='movie-name'>" +  movie.title + "</div>"  + listShowtimes(movie.showtimes) + "<br>"
  });
  return returnString
}

function listShowtimes(showtimesArray) {
  var showtimesString = ""
  showtimesArray.forEach(function(showtime, movie) {
    showtimesString += "<span class='showtime'>" + showtime + "</span>   "
  });
  return showtimesString
}

function cinemasApiSearch(searchTerm) {
  $.getJSON({
    url: 'http://localhost:3000/api/v1/cinemas/search?postcode='+ searchTerm,
  }) .done(function(res) {
    console.log(res)
      listCinemas(res.cinemas);
  })

  .fail(function(err) {
    console.log('Error: ' + err.status);
  });
}


