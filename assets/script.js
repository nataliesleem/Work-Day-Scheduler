$(document).ready(function() {
    $(".saveBtn").on("click", function(event) {
        console.log(event.target.parentElement.children[1].value)
        var textValue = event.target.parentElement.children[1].value;
        var hour = event.target.parentElement.children[0].innerText.trim();

        localStorage.setItem(hour, textValue);
    });
    function hourUpdate() {
        var currentHour = moment().hours();
        console.log(currentHour);

        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            if(blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })


    }
     hourUpdate(); 
     var interval = setInterval(hourUpdate, 15000);

     $("#currentDay").text(moment().format("dddd, MMMM, Do"))
})



$("#hour-9 .description").val(localStorage.getItem("9am"));
$("#hour-10 .description").val(localStorage.getItem("10am"));
$("#hour-11 .description").val(localStorage.getItem("11am"));
$("#hour-12 .description").val(localStorage.getItem("12am"));
$("#hour-13 .description").val(localStorage.getItem("1pm"));
$("#hour-14 .description").val(localStorage.getItem("2pm"));
$("#hour-15 .description").val(localStorage.getItem("3pm"));
$("#hour-16 .description").val(localStorage.getItem("4pm"));
$("#hour-17 .description").val(localStorage.getItem("4pm"));