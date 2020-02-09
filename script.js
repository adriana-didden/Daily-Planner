
var currentDateAndTime = Date(Date.now());  // exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)`
var currentHour = new Date().getHours(); //Current hour in military time`

var num = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
// var userInput = [""];

$(document).ready(function () {

    function getDayTime() {
        $("#currentDay").text(currentDateAndTime);
    }
    getDayTime();

    function pastPresentFuture() {
        var list = [];
        for (var i = 0; i <= num.length; i++) {
            if (currentHour === (num[i])) {
                console.log("here")
                $("#textarea" + (num[i])).addClass('present')
            } else if (currentHour > (num[i])) {
                console.log("bye")
                $("#textarea" + (num[i])).addClass('past')
            } else if (currentHour < (num[i])) {
                console.log("notyet")
                $("#textarea" + (num[i])).addClass('future')
            }
        }
    };
    pastPresentFuture();

    function event() {
        event.addEventListener("input", function () {
            localStorage.setItem(".textarea", event.value);
        }, false);
    }
    function save() {


    }



})