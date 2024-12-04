const weather = new Weather("تهران", "تهران");

const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document
  .getElementById("w-change-btn")
  .addEventListener("click", changeLocation);

async function changeLocation() {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(state, city);

  getWeather();

  var myModalEl = document.getElementById("locationModal");
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
}

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      console.log(result);
      ui.paint(result, weather.location);
    })
    .catch((err) => console.log(err.message));
}
