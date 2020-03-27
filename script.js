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
    cardBody.append(city,temperature, humidity, wind,);
    card.append(cardBody);
    $("#currentCity").append(card)

    var lon = response.coord.lon;
    var lat = response.coord.lat;

    // SEND OVER TO uvIndex()
    uvIndex(lon, lat);
   
  }

// making a request to get the UV index base on longitute and the latittude of the input value 
 
function uvIndex(lon, lat) {
	// SEARCHES
	var indexURL =
		"https://api.openweathermap.org/data/2.5/uvi?appid=0992b5cf68ff327e9b1a50f58b53ba8b&lat=";
	var middle = "&lon=";
	var indexSearch = indexURL + lat + middle + lon;
	console.log(indexSearch);

	$.ajax({
		url: indexSearch,
		method: "GET"
	}).then(function(response) {
		var uvFinal = response.value;

		// should be able to compare float to the numbers, try it out
		// then append button with uvFinal printed to it
		$("#currentCity").append("UV Index: ");
		var uvBtn = $("<button>").text(uvFinal);
        $("currentCity").append(uvFinal);
    })
}



        // function getCurrentForecast () {
  
        //     $.ajax({
        //       url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
        //       method: "GET"
        //     }).then(function (response){
          
        //       console.log(response)
        //       console.log(response.dt)
        //       $('#forecast').empty();
          
            //   // variable to hold response.list
            //   let results = response.list;
            //   console.log(results)
              
            //   for (let i = 0; i < results.length; i++) {
          
            //     let day = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
            //     let hour = results[i].dt_txt.split('-')[2].split(' ')[1];
            //     console.log(day);
            //     console.log(hour);
          
            //     if(results[i].dt_txt.indexOf("12:00:00") !== -1){
                  
            //       // get the temperature and convert to fahrenheit 
            //       let temp = (results[i].main.temp - 273.15) * 1.80 + 32;
            //       let tempF = Math.floor(temp);
          
            //       const card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
            //       const cardBody = $("<div>").addClass("card-body p-3 forecastBody")
            //       const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
            //       const temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tempF + " °F");
            //       const humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + results[i].main.humidity + "%");
          
            //       const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")
          
            //       cardBody.append(cityDate, image, temperature, humidity);
            //       card.append(cardBody);
            //       $("#forecast").append(card);
          
            //     }
            //   }
            // });
          
        //   })}
          












