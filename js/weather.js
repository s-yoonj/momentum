const API_KEY = "a9752a3c1b91c6d274b63d203fd2fdad";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("현재 위치입니다.", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("위치를 찾지 못하였습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
