const API = "2791fd68e18e3ffd23e36d9f1f90c2a2";

function onGeoOk(position) {
  const wii = position.coords.latitude;
  const gyung = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${wii}&lon=${gyung}&appid=${API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherSpan = document.querySelector("#weather span:first-child");
      const tempSpan = document.querySelector("#weather span:nth-child(2)");
      const nameSpan = document.querySelector("#weather span:last-child");
      const name = data.name;
      const tem = data.main.temp;
      const weather = data.weather[0].main;

      weatherSpan.innerHTML = weather;
      tempSpan.innerHTML = tem;
      nameSpan.innerHTML = name;
    });
}

function onGeoError() {
  alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
