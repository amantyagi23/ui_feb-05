window.addEventListener("DOMContentLoaded", bindEvents);
function bindEvents() {
  document.getElementById("searchBtn").addEventListener("click", getInput);
}

function getInput() {
  var input = document.getElementById("search").value;
  getWeatherReport(input);
}

async function getWeatherReport(cityName) {
  var response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8ff3b783b61261fc8bade7e97d3205fe`
  );
  var data = await response.json();
  console.log(data);
  var cityName = document.getElementById("cityName");
  cityName.innerText = data.name;
  var temp = document.getElementById("temp");
  temp.innerText = data.main.temp - 273.15;
}
