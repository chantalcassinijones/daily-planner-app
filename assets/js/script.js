
 
//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
//Allow a user to enter an event when they click a timeblock. done


$(function() {

var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM DD'));
//console.log(now); 

//color code event based on current time 



//event listener when save button is clicked 

$('.saveBtn').on('click', function(event) {
    event.preventDefault(); 

//get value from textarea 
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //save to local storage
	localStorage.setItem(time,text);
});

//Persist events between refreshes of a page 

$(" #hour-9 .description").val(localStorage.getItem("hour-9"));
$(" #hour-10 .description").val(localStorage.getItem("hour-10"));
$(" #hour-11 .description").val(localStorage.getItem("hour-11"));
$(" #hour-12 .description").val(localStorage.getItem("hour-12"));
$(" #hour-1 .description").val(localStorage.getItem("hour-1"));
$(" #hour-2 .description").val(localStorage.getItem("hour-2"));
$(" #hour-3 .description").val(localStorage.getItem("hour-3"));
$(" #hour-4 .description").val(localStorage.getItem("hour-4"));
$(" #hour-5 .description").val(localStorage.getItem("hour-5"));
});