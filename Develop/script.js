// when page loads we need to retrieve the local storage
// when the page loads we need to be aware of the local date/time
$(window).on("load", function () {
 
    // use moment to get the date/time in nice format
    var currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $("#currentDay").append(currentDate);

    // we can't work with partial time i.e. 10.05am, so need to get
    // it in exact rounded format, so we get the H only
    var currentTime = moment().format("H");
    
    // calling the fields by whole time, ie. 9, 10, 11 in order
    // to make it easier to loop around it

    // loop through all the times to determine if past, present, future
    // use existing CSS to define what they are
    for(i=9; i<= 17; i++) {

        var CurrentContainer = i;

        // if ID of the Div matches the time then its CURRENT
        if (currentTime == i) {
            // set the DIV ID 
            $('#' + CurrentContainer).addClass("present");

            // set the TEXTAREA to the right color
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("present");
        }

        // if ID of the Div is greater than the time then its past
        else if (currentTime > i) {
            $('#' + CurrentContainer).addClass("past");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("past");
        }

        // if ID of the Div is less than the time then its past
        else if (currentTime < i) {
            $('#' + CurrentContainer).addClass("future");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("future");
        }

    }


    $("button").on("click", function() {

        //if the button for save is clicked, save the entirety
        //of all fields into local storage, instead of one-by-one
        
        for(i=9; i<= 17; i++) {

            var CurrentContainer = i;
            localStorage.setItem(i + "am", ($('#' + i).children('div').children('div').children("textarea").val()));

        }

    })

    // retrieve from local storage and append it to the textarea
    for(i=9; i<= 17; i++) {

        var CurrentContainer = i;
        $('#' + i).children('div').children('div').children("textarea").append(localStorage.getItem(i + "am"));
    }

})
