// Greeting

function randomGreeting() {
    var greetings = ["Hi", "Howdy", "Bonjour", "Ciao", "Buenos días"];
    var randomNum = Math.floor(Math.random() * 5);
    return greetings[randomNum];
}

//Date Message

function dateMessage() {
    var end = "";
    var currentDate = new Date();
    var day = currentDate.getDate();
    var days = currentDate.getDay();
    var dayAr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = currentDate.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = currentDate.getFullYear();


    if (day == 1 && 21 && 31) {
        end = "st";

    } else if (day == 2 && 22) {
        end = "nd";
    } else if (day == 3 && 23) {
        end = "rd";
    } else {
        end = "th";
    }

    return "Today is " + dayAr[days] + ", " + months[month] + " " + day + end + ", " + year;


}
