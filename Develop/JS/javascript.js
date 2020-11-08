// First we create a display variable that is tied to the currentDay element of the jumbotron
var timeDisplayEl = document.getElementById("currentDay");

// To dynamically display the current day, date and/or time we must create a function tied to moment.js which is performed at a recoccuring interval to reference, update and display day, date, and/or time
setInterval(() => {

    // Within this function we must link the function to moment.js with a variable
    var currentTime = moment();

    // Then we must instruct this function how to format/present currentTime
    var formatCurrentTime = currentTime.format("dddd, D MMMM YYYY");
    
    // Then we need to insruct the function to modify the text of the current day section to actually display the day/time
    currentDay.textContent = formatCurrentTime;

    // Finally at the tail end of this function, included in the setInterval wrapper, we specficy the interval that this task will be performed. In this case, it's once every 1000 milliseconds
}, 1000);




