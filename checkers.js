// CHECKS TWO SLOTS
function checkerDefault(array) {
    for (x = 0; x < array.length - 1; x++) {
      var beginning = array[x].DateDisplay.match(/\d+:\d\d\s../g)[0];

      var first = array[x].DateDisplay.match(/\d+:\d\d\s../g)[1];
      var second = array[x + 1].DateDisplay.match(/\d+:\d\d\s../g)[0];

      var last = array[x + 1].DateDisplay.match(/\d+:\d\d\s../g)[1];

    if (first === second) {
        // console.log("Start: " + beginning + " | End: " + last); // debugging
        $("#openings").append(
            '<li><b>' + "Start: " + beginning + " | End: " + last +
            '</b><br> Event Identifiers: <br>' + array[x].EventIdentifier + "<br>" + array[x + 1].EventIdentifier +
            '<br> EventScheduleId: ' + array.EventScheduleId +
            '<br> BookableID: ' + id +
            '</li><br>');
    }
    else {
      $("#openings").append("Sorry. No time slots are available for that service");
    }
    } // -- for loop
} // -- function

// CHECK THREE SLOTS
function checkerThree(array) {
  for (x = 0; x < array.length - 2; x++) {
      var beginning = array[x].DateDisplay.match(/\d+:\d\d\s../g)[0];

      var first = array[x].DateDisplay.match(/\d+:\d\d\s../g)[1];
      var second = array[x + 1].DateDisplay.match(/\d+:\d\d\s../g)[0];
      var third = array[x + 1].DateDisplay.match(/\d+:\d\d\s../g)[1];
      var fourth = array[x + 2].DateDisplay.match(/\d+:\d\d\s../g)[0];

      var last = array[x + 2].DateDisplay.match(/\d+:\d\d\s../g)[1];
    if (first === second && third === fourth) {
      // console.log("Start: " + beginning + " | End: " + last); // debugging
      $("#openings").append(
          '<li><b>' + "Start: " + beginning + " | End: " + last +
          '</b><br> Event Identifiers: <br>' + array[x].EventIdentifier + "<br>" + array[x + 1].EventIdentifier + "<br>" + array[x + 2].EventIdentifier +
          '<br> EventScheduleId: ' + array.EventScheduleId +
          '<br> BookableID: ' + id +
          '</li><br>');
    }
    else {
      $("#openings").append("Sorry. No time slots are available for that service");
    }
  } // -- for loop
} // -- function

// CHECK FOUR SLOTS
function checkerFour(array) {
  for (x = 0; x < array.length - 3; x++) {
      var beginning = array[x].DateDisplay.match(/\d+:\d\d\s../g)[0];

      var first = array[x].DateDisplay.match(/\d+:\d\d\s../g)[1];
      var second = array[x + 1].DateDisplay.match(/\d+:\d\d\s../g)[0];
      var third = array[x + 1].DateDisplay.match(/\d+:\d\d\s../g)[1];
      var fourth = array[x + 2].DateDisplay.match(/\d+:\d\d\s../g)[0];
      var fifth = array[x + 2].DateDisplay.match(/\d+:\d\d\s../g)[1];
      var sixth = array[x + 3].DateDisplay.match(/\d+:\d\d\s../g)[0];

      var last = array[x + 3].DateDisplay.match(/\d+:\d\d\s../g)[1];
    if (first === second && third === fourth) {
      // console.log("Start: " + beginning + " | End: " + last); // debugging
      $("#openings").append(
          '<li><b>' + "Start: " + beginning + " | End: " + last +
          '</b><br> Event Identifiers: <br>' + array[x].EventIdentifier + "<br>" + array[x + 1].EventIdentifier + "<br>" + array[x + 2].EventIdentifier + "<br>" + array[x + 3].EventIdentifier +
          '<br> EventScheduleId: ' + array.EventScheduleId +
          '<br> BookableID: ' + id +
          '</li><br>');
    }
    else {
      $("#openings").append("Sorry. No time slots are available for that service");
    }
  } // -- for loop
} // -- function
