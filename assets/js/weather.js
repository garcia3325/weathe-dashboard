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
})

//var apiKey = "389e99137584af0845e21489c7fa8c55";