const apiKey = "205dcbfda4257198975aa78dec8e4c19";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=205dcbfda4257198975aa78dec8e4c19&units=metric&q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const image = document.querySelector(".icon");

async function checkweather(city) {
  const response = await fetch(apiURL + city + `&appid= ${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-body").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector("#wind-speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    if (data.weather[0].main == "Clouds") {
      image.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      image.src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      image.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      image.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      image.src = "images/mist.png";
    } else if (data.weather[1].main == "Snow") {
      image.src = "images/snow.png";
    }
    document.querySelector(".weather-body").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(search.value);
});
