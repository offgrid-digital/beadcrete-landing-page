function setNextDate() {
    // Get current date
    var date = new Date();

    // Add five days to current date
    date.setDate(date.getDate());


    let day = date.getDate();
    let current_month = date.getMonth() + 1;
    let current_year = date.getFullYear();

    let currentDate = `${day}-${current_month}-${current_year}`;

    $("#todays-date").text(currentDate)
    $("#today-date").text(currentDate)
}



function setTimer() {
    

    var date = new Date();

    // // Add five days to current date
    date.setHours(23, 59, 59, 99);
    

    // Set the date we're counting down to
    var countDownDate = date.getTime();
    // console.log(date.getTime());
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);

}



$(document).ready(function () {
    

    setNextDate();
    setTimer();

});