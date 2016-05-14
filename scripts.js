// PLEASE NOTE: HEADER and KEY variables included in secrets.js (.gitignore)

// 1) Submit Item ID (haircut, shave, etc.)
var id = '57082d0d081ddb10401d717a';

// 2) AJAX GET REQUEST FROM API
$('#button').click(function() {

    // setting variables (may not be necessary)
    var $openings = $('#openings');
    var $title = $('#title');

    // clear previous items in case of refresh
    $('#openings').empty();
    $('#title').empty();

    // GETTING THE DATE (month/day/year)
    var d = $('#date').val();
    var m = [" Jan ", " Feb ", " Mar ", " Apr ", " May ",
        " June ", " July ", " Aug ", " Sept ", " Oct ",
        " Nov ", " Dec "
    ];
    var month = m[Number(d.substring(0, 2)) - 1]; // take number from date and use to index month array
    var date = d.substring(3, 5) + month + d.substring(6); // '24 Apr 2016' -- date.replace(/%20/g, " "); for %20 in between

    // AJAX get request
    $.ajax({
        type: 'GET',
        url: 'https://sagenda-sagenda-v1.p.mashape.com/Events/GetAvailability/' + key + '/' + date + '/' + date + '?bookableItemId=' + id,
        headers: {
            "X-Mashape-Key": header
        },
        success: function(openings) {
            console.log(openings);
            if (openings.length === 0) { // IF nothing is available
                $title.append("Sorry, nothing available today!");
            } else { // IF there is something
                $title.append('Availability for ' + d);
                checkerDefault(openings);
                // checkerThree(openings); // for three slots
                // checkerFour(openings); // for four slots

                // test date = 05/15/2016
            }
        },
        error: function() { // if ajax != 200 response
            $title.append("Sorry. An Error Occured");
        }
    }); // -- ajax
}); // -- #button.click

// 3) AJAX POST REQUEST TO API
$('#book').click(function() {

    var $confirm = $('#confirm');
    $('#confirm').empty(); // clear field

    // user input variables
    var EventScheduleId = $('#eventscheduleid').val();
    var FirstName = $('#firstname').val();
    var LastName = $('#lastname').val();
    var PhoneNumber = $('#phone').val();
    var Email = $('#email').val();
    var Description = $('#desc').val();
    var EventIdentifier = $('#eventid').val();

    // json object
    var booking = {
        "ApiToken": key,
        "BookableItemId": id,
        "EventScheduleId": EventScheduleId,
        "Courtesy": "Mr.",
        "FirstName": FirstName,
        "LastName": LastName,
        "PhoneNumber": PhoneNumber,
        "Email": Email,
        "Description": Description,
        "EventIdentifier": EventIdentifier
    }; // -- booking

    $.ajax({
        type: 'POST',
        url: 'https://sagenda-sagenda-v1.p.mashape.com/Events/SetBooking',
        headers: {
            "X-Mashape-Key": header
        },
        data: booking,
        success: function(booked) {
            $confirm.append("<p> Your appointment is booked, Mr. " + booked.LastName + "</p>");
        }, // -- success
        error: function() {
                $confirm.append("<p> Sorry! There was an error booking your appointment. Please call us </p>");
            } // -- error

    }); // -- ajax
}); // -- #book.click
