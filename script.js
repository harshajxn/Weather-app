let weather = {
    apiKey: "c9e0895f28032aac899d857f882e88d5",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Delhi");

// let weather={
//     apiKey:"e88d5c9e0895f28032aac899d857f882",
//     fetchWeather: function(city){
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
//         + city 
//         + "&units=metric&appid=" 
//         + this.apiKey)
    
//         .then((response)=> response.json())
//         .then((data)=> this.displayWeather(data))
//     },
//     displayWeather: function(data)
//     {
// const { name } = data;
// const {icon, description} = data.weather[0];
// const { temp, humidity} = data.main;
// const { speed } = data.wind;
// console.log(name,icon,description,temp,humidity,speed)
// document.querySelector(".city").innerText = "Weather in " + name;
// document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
// document.querySelector(".descrption").innerText = description;
// document.querySelector(".temp").innerText = temp + "°C";
// document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
// document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/hr";
//     },
//     search: function(){
//         this.fetchWeather(document.querySelector(".search-bar").value);
//     },
// };

// document.querySelector(".search button").addEventListener("click", function () {
//     weather.search();
//   });
  
//   document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         weather.search();
//       }
//     });
  
//   weather.fetchWeather("Delhi");
  


//https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=c9e0895f28032aac899d857f882e88d5
//{
    // "coord":{
    //     "lon":77.2167,
    //     "lat":28.6667
    // },
    // "weather":[
    //     {"id":721,
    //     "main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.2,"feels_like":296.73,"temp_min":297.2,"temp_max":297.2,"pressure":1011,"humidity":41},"visibility":4000,"wind":{"speed":3.09,"deg":120},"clouds":{"all":5},"dt":1675948467,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1675906484,"sunset":1675946161},"timezone":19800,"id":1273294,"name":"Delhi","cod":200}
    // "coord": {
    //     "lon": 77.2167,
    //     "lat": 28.6667
    // },
    // "weather": [{
    //     "id": 721,
    //     "main": "Haze",
    //     "description": "haze",
    //     "icon": "50n"
    // }], "base": "stations", "main": {
    //     "temp": 297.2,
    //     "feels_like": 296.73,
    //     "temp_min": 297.2,
    //     "temp_max": 297.2,
    //     "pressure": 1011,
    //     "humidity": 41
    // }, "visibility": 4000, "wind": {
    //     "speed": 3.09,
    //     "deg": 120
    // }, "clouds": {
    //     "all": 5
    // }, "dt": 1675948467, "sys": {
    //     "type": 1,
    //     "id": 9165,
    //     "country": "IN",
    //     "sunrise": 1675906484,
    //     "sunset": 1675946161
    // }, "timezone": 19800, "id": 1273294, "name": "Delhi", "cod": 200
    // }
