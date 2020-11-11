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
    
    // Create a for loop to loop through the textarea elements. Because we start at userInput8 and move through 16, we will make i-8 and have our completion parameters be when i <= 18
    for (i = 8; i <= 18; i++){

        // If our current hour is less than i it means the time block is in the past and we apply the .past css
        if (currentHour > i) {
            
            // $ is the jQuery getElementByID equivalent, after grabbing the element we use .addClass adds to apply .past 
            $("#userInput" + i).addClass("past");
        } 
        
        // If our current hour is equal to i it means the time block is in the present and we will want to add .present to it
        else if (currentHour == i) {
            
            // $ is the jQuery getElementByID equivalent, after grabbing the element we use .addClass adds to apply .preset
            $("#userInput" + i).addClass("present");
        }
        
        // If our current hour is equal to i it means the time block is in the present and we will want to add .present to it
        else if (currentHour < i) {
            
            // $ is the jQuery getElementByID equivalent, after grabbing the element we use .addClass adds to apply .future
            $("#userInput" + i).addClass("future");
        }

        // As the function loops it 
        var printText = localStorage.getItem("Textarea-" + i);
        $("#userInput" + i).text(printText);
    }
}

// After defining the function we must call it to run it 
applyPastPresentFuture();

// Event listener for button clicks within the main container in relation to the storage function
$(".container").on("click", "button", storage);

// Create function to store the data in the text area
function storage(event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Save the data-hour value
    var SaveButtonClick = $(this).data("hour");

    // Query the information in the text area element with .prev
    var getInformation = $(this).prev().val();

    // Save the the hour value and textarea information into storage
    localStorage.setItem("Textarea-" + SaveButtonClick, getInformation);

    // Call the storage event
    storage(event);
};
