
var currentHour = new Date().getHours(); //Current hour in military time`


// var userInput = [""];

$(document).ready(function () {
    $("#currentDay").text(Date(Date.now()));
    var dateTime = setInterval(() => {
        
        $("#currentDay").text(Date(Date.now()));
    }, 1000);


    function pastPresentFuture() {

        for (var i = 9; i <= 18; i++) {
            if (currentHour === i) {
                console.log("here")
                $("#textarea" + i).addClass('present')

            } else if (currentHour > i) {
                console.log("bye")
                $("#textarea" + i).addClass('past')
                
            } else if (currentHour < i) {
                console.log("notyet")
                $("#textarea" + i).addClass('future')
            }

           var todo = localStorage.getItem("hour-"+i)

           if(todo){
               $("#textarea"+i).val(todo)
           }
        }
    };
    pastPresentFuture();
    $(".saveBtn").click(function (){
        var selectedHour = $(this).val()
       var todo =  $("#textarea"+selectedHour).val()
        console.log(todo)
        localStorage.setItem("hour-"+selectedHour, todo)
    })

    


})