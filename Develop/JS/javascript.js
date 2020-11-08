// Create a time variable connectcted to moment.js
var timeDisplayEl = document.getElementById("currentDay");

// To create a moment.js clock we must create a function which is performed at a set interval
setInterval(() => {

    // Within this function we must link
    var currentTime = moment();
    var formatCurrentTime = currentTime.format("dddd, D MMMM YYYY");
    
    currentDay.textContent = formatCurrentTime;
}, 1000);




