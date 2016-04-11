// item ID (haircut, shave, etc.)
  var id = '57082d0d081ddb10401d717a';

// GETTING THE DATE (month/day/year)

  var d = '01/03/2017';                                 // month/day/year
  // var d = document.getElementByID("date")[0].value;

  var m = [" Jan ", " Feb ", " Mar ", " Apr ", " May ",
           " June ", " July ", " Aug ", " Sept ", " Oct ",
           " Nov ", " Dec "];

  var month = m[Number(d.substring(0,2)) - 1];          // take month (04) and create index for month array

  var date = d.substring(3,5) + month + d.substring(6); // '24 Apr 2016' -- date.replace(/%20/g, " "); for %20 in between

$('#button').click(function () {

  var $orders = $('#orders');
  var $title = $('#title');

  // clear previous items in case of refresh
  $('#orders').empty();
  $('#title').empty();

  // header and key variables included in secrets.js (.gitignore)

  $.ajax({
    type: 'GET',
    url: 'https://sagenda-sagenda-v1.p.mashape.com/Events/GetAvailability/' + key + '/' + date + '/' + date + '?bookableItemId=' + id,
    headers: {"X-Mashape-Key": header},
    success: function(orders) {
      if (orders.length === 0 ) { // if nothing is available
        $title.append("Sorry, nothing available today!");
      }
      else { // if there is something
        $title.append('Availability for ' + d);
        $.each(orders, function(i, order) { // FOR loop - i is the index
          $orders.append('<li>' + order.From.substring(12) + '</li>');
        });
      }
    },
    error: function() { // if ajax != 200 response
      $title.append("Sorry. An Error Occured");
    }
  });
});
