
var currentDateAndTime = Date(Date.now());  // exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)`
var currentHour = new Date().getHours(); //Current hour in military time`

$(document).ready(function () {

    function getDayTime() {
        $("#currentDay").text(currentDateAndTime);
    }
    getDayTime();

    function currentTime(){
        if(currentHour === i){
            console.log("here")
            $("#textArea"+i).addClass('present')
        }
    }
    currentTime();
})