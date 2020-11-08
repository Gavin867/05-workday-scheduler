// Create a time variable connectcted to moment.js
var timeDisplayEl = document.getElementById("currentDay");

// To create a moment.js clock we must create a function which is performed at a set interval
setInterval(() => {
    var currentTime = moment();
    var formatCurrentTime = currentTime.format("dddd, D MMMM YYYY, h:mm:ss A");
    
    currentDay.textContent = formatCurrentTime;
}, 1000);




