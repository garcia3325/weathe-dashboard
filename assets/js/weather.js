$(document).ready(function () {

    //function that saves the user input as a search value
    $("#searchbtn").on("click", function () {
        var searchValue = $("#searchbar").val()
        console.log(searchValue)
        $("#searchbar").val("")

        searchWeather(searchValue);
    })

    $("#searchbtn").on("click", function () {
        var searchHistory = $("#searchbar").val();
        console.log(searchHistory)
        localStorage.setItem("history", JSON.stringify(searchHistory))
    })

//APIkey from openweatherAPI
let apiKey = "389e99137584af0845e21489c7fa8c55";

//AJAX call with the user input
function searchWeather(searchValue) {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIkey,
        dataType: "json",
        success: function (data) {
        }
    })
}
})