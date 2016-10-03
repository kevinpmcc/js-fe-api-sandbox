$(function() {
    $("#search").click( function() 
        {
          console.log('called')
          var searchTerm = $('#console').val();
          cinemasConsoleApiSearch(searchTerm)
        });
});



function cinemasConsoleApiSearch(searchTerm) {
  $.getJSON({
    url: 'http://localhost:3000/api/v1/cinemas/search?postcode='+ searchTerm,
  }) .done(function(res) {
    console.log(res)
      displayJson(JSON.stringify(res, null, 2));
  })

  .fail(function(err) {
    console.log('Error: ' + err.status);
  });
}

function displayJson(res) {
  $("body").append("<p>" + res + "</p>");
}

