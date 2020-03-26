let city = $("#search").val();
const apiKey = "&appid=0992b5cf68ff327e9b1a50f58b53ba8b";
let date = new Date();

// let city = $("#search").val();

$('#searchBtn').on('click', () =>{
    
$('#forecastH5').addClass('show');

city = $("#search").val();

$("#searchTerm").val("");  


const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

$.ajax({
  url: queryUrl,
  method: "GET"
})
.then(function (response){

  console.log(response)

  console.log("name:",response.name)
  console.log(response.weather[0].icon)

//   let tempF = (response.main.temp - 273.15) * 1.80 + 32;
//   console.log("temp:",Math.floor(tempF))

  console.log('humidity',response.main.humidity)

  console.log('speed',response.wind.speed)

  getCurrentConditions(response);
  console.log('conditions:', responce)
//   getForecast('current forecast',response);
  makeList();
  })
})

function makeList() {
    let listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
  }
  function getCurrentConditions (response) {

    // get the temperature and convert to fahrenheit 
    let temp = (response.main.temp - 273.15)
    temp = Math.floor(temp);

    $('#currentCity').empty();

    // get and set the content 
    const card = $("<div>").addClass("card");
    const cardBody = $("<div>").addClass("card-body");
    const city = $("<h4>").addClass("card-title").text(response.name);
    const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " +temp + " °C");
    const humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
    const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
    const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

    // add to page
    city.append(cityDate, image)
    cardBody.append(city,temperature, humidity, wind);
    card.append(cardBody);
    $("#currentCity").append(card)
   
  }


//   function getForecast(){

// console.log('...')

//   };











