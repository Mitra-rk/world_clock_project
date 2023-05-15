function getCurrentTime(){
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTz = moment().tz("America/Los_angeles");
  losAngelesDateElement.innerHTML = losAngelesTz.format("MMMM Do YYYY ");
  losAngelesTimeElement.innerHTML = losAngelesTz.format(
    "h:mm:ss [<small>]A[</small>] "
  );
  
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTz = moment().tz("Europe / Paris");
  parisDateElement.innerHTML = parisTz.format("MMMM Do YYYY ");
  parisTimeElement.innerHTML = parisTz.format("h:mm:ss [<small>]A[</small>] ");
}


setInterval(getCurrentTime,1000);





