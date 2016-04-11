$('#button').click(function () {

  var $orders = $('#orders');
  var $title = $('#title');

  // clear previous items in case of refresh
  $('#orders').empty();
  $('#title').empty();

  // date
  var d = '26 Apr 2016';
  var date = d.replace(/%20/g, " "); // becomes '24%20Apr%202016'

  $.ajax({
    type: 'GET',
    url: 'https://sagenda-sagenda-v1.p.mashape.com/Events/GetAvailability/' + key + '/' + date + '/' + date + '?bookableItemId=' + id,
    headers: {"X-Mashape-Key": header},
    success: function(orders) {
      if (orders.length === 0 ) { // if nothing is available
        $title.append("Sorry, nothing available today!");
      }
      else { // if there is something
        $title.append('Showing Dates For: ');
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
