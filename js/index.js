function getCurrentTime() {
  //Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTz = moment().tz("America/Los_angeles");
    losAngelesDateElement.innerHTML = losAngelesTz.format("MMMM Do YYYY ");
    losAngelesTimeElement.innerHTML = losAngelesTz.format(
      "h:mm:ss [<small>]A[</small>] "
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisTz = moment().tz("Europe / Paris");
    parisDateElement.innerHTML = parisTz.format("MMMM Do YYYY ");
    parisTimeElement.innerHTML = parisTz.format(
      "h:mm:ss [<small>]A[</small>] "
    );
  }
}

function updateCity(event) {
  let cityName = event.target.value;
  if (cityName === "current") {
    cityName = moment.tz.guess();
  }
  let city1 = cityName.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" >
          <div>
            <h2>${city1} 🚩</h2>
            <div class="date">${moment()
              .tz(cityName)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${moment()
            .tz(cityName)
            .format("h:mm:ss [<small>]A[</small>] ")}</div>
        </div>
        <a href="/">Back to all cities</a>
      </div>`;
}
let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);
setInterval(getCurrentTime, 1000);
