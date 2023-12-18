//make sure DOM is ready 
$(function() {
// get current day in the specified format
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM DD'));
//console.log(now); 

// function to color code event based on current time 
function colourCode() {
    // get current hour 
var currentHour = dayjs().hour();
 //console.log(currentHour);
 //get each time-block id 
 $('.time-block').each(function() {
    var selectedHour = parseInt($(this).attr("id").split("-")[1]); //only get number value to check against current time
    //console.log(selectedHour);
   $(this).removeClass('past present future'); //remove all classes to allow each class to show only if conditions are met

   if (currentHour === selectedHour) {
    $(this).addClass('present'); //add .present if the current time and selected block hour match
   } else if (currentHour > selectedHour) {
    $(this).addClass('past'); //add .past if the current time is higher than selected time-block hour
   } else {
    $(this).addClass('future'); //add .future if the current time is less than the selected time-block hour
}
});
};
//event listener when save button is clicked 
$('.saveBtn').on('click', function(event) {
    event.preventDefault(); 
//get value from textarea 
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //save to local storage
	localStorage.setItem(time, text);
});

//Persist events between refreshes of a page 
$(" #hour-9 .description").val(localStorage.getItem("hour-9"));
$(" #hour-10 .description").val(localStorage.getItem("hour-10"));
$(" #hour-11 .description").val(localStorage.getItem("hour-11"));
$(" #hour-12 .description").val(localStorage.getItem("hour-12"));
$(" #hour-13 .description").val(localStorage.getItem("hour-13"));
$(" #hour-14 .description").val(localStorage.getItem("hour-14"));
$(" #hour-15 .description").val(localStorage.getItem("hour-15"));
$(" #hour-16 .description").val(localStorage.getItem("hour-16"));
$(" #hour-17 .description").val(localStorage.getItem("hour-17"));

colourCode();

});