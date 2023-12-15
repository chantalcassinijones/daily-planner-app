//Display the current day at the top of the calender when a user opens the planner. done
 
//Present timeblocks for standard business hours when the user scrolls down. done
 
//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
//Allow a user to enter an event when they click a timeblock. done

// Save the event in local storage when the save button is clicked in that timeblock.

//Persist events between refreshes of a page

//Uses a date utility library to work with date and time. done 

//ensures that jQuery code runs after the DOM is fully loaded. done
$(function() {

var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM DD'));
//console.log(now); 

});