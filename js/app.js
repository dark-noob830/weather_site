const weather = new Weather("تهران", "تهران");
weather.changeLocation('فارس','شیراز')
document.addEventListener('DOMContentLoaded',getWeather)

function getWeather() {
  weather
    .getWeather()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
