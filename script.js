// This is our API key.
const apiKey = "&appid=0992b5cf68ff327e9b1a50f58b53ba8b";
const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
// array to add cities to, to be grabbed from after search
// var citiesArray = JSON.parse(localStorage.getItem("cities")) || [];

let date = new Date();
// const m = moment();

// let city = $("#search").val();



$("#searchBtn").on("click", function() {
    console.log ( 'click, click ')

    $('#forecastH5').addClass('show');
  
    // get the value of the input from user
    city = $("#searchTerm").val();
    
    // clear input box
    $("#searchTerm").val("");  


    
  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response){

    console.log('response', response)
  })


});  




