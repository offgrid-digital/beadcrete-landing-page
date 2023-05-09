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
}

$(document).ready(function () {
    

    setNextDate();


});