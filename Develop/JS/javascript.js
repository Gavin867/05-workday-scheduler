// First we create a display variable that is tied to the currentDay element of the jumbotron
var timeDisplayEl = document.getElementById("dateTime");

// To dynamically display the current day, date and/or time we must create a function tied to moment.js which is performed at a recoccuring interval to reference, update and display day, date, and/or time
setInterval(() => {

    // Within this function we must link the function to moment.js with a variable
    var currentTime = moment();

    // Then we must instruct this function how to format/present currentTime
    var formatCurrentTime = currentTime.format("dddd, D MMMM YYYY,  h:mm:ss a");
    
    // Then we need to insruct the function to modify the text of the current day section to actually display the day/time
    dateTime.textContent = formatCurrentTime;

    // Finally at the tail end of this function, included in the setInterval wrapper, we specficy the interval that this task will be performed. In this case, it's once every 1000 milliseconds
}, 1000);

// Create a function to apply the past, present, and future css classes
// In this function we will use current time to rehiterate the currentTime variable (since it wasn't defined globally)
function applyPastPresentFuture(currentTime=moment()){

    // Create a variable which grabs the current hour
    var currentHour = currentTime.hour();
    
    // Create a for loop to loop through the textarea elements
    for (i = 8; i<=18; i++){

        if (currentHour>i){
            
            $("#userInput"+i).addClass("past");
        } 
        
        else if (currentHour ==i){
            
            $("#userInput" + i).addClass("present");
        }
        
        else if (currentHour<i){
            
            $("#userInput" + i).addClass("future");
        }
    }
}
applyPastPresentFuture();