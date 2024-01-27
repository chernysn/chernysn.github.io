var date_dom = document.getElementById("today_date");
var date_tomorrow_dom = document.getElementById("tomorrow_date");
var today_date = new Date();
var tomorrow_date = new Date(today_date);
tomorrow_date.setDate(today_date.getDate() + 1);

date_dom.innerHTML = today_date.toLocaleDateString();
date_tomorrow_dom.innerHTML = tomorrow_date.toLocaleDateString();

function getDay(day) {
  day = day - 1;
  if (day < 0) {
    day = 6;
  }
  return day;
}

var daysWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var getDayWeek_today = today_date.getDay();
getDayWeek_today = getDay(getDayWeek_today);
var getDayWeek_tomorrow = tomorrow_date.getDay();
getDayWeek_tomorrow = getDay(getDayWeek_tomorrow);
var today_day = daysWeek[getDayWeek_today];
var tomorrow_day = daysWeek[getDayWeek_tomorrow];

var today_date_weekDay = document.getElementById("today_date_weekDay");
var tomorrow_date_weekDay = document.getElementById("tomorrow_date_weekDay");

today_date_weekDay.innerHTML = today_day;
tomorrow_date_weekDay.innerHTML = tomorrow_day;

var imgs = [
  "url(sunrise_images/weather_6.jpg)",
  "url(sunrise_images/weather_14.jpg)",
  "url(sunrise_images/weather_13.jpg)",
  "url(sunrise_images/weather_9.jpg)",
  "url(sunrise_images/weather_5.jpg)",
];
var body = document.getElementsByTagName("BODY")[0];
var i = 0;

setInterval(function () {
  setTimeout(changeImage1, 10000);
  function changeImage1() {
    body.style.backgroundImage = imgs[i];
    i = i + 1;
  }

  setTimeout(changeImage2, 20000);
  function changeImage2() {
    body.style.backgroundImage = imgs[i];
    i = i + 1;
  }
  setTimeout(changeImage3, 30000);
  function changeImage3() {
    body.style.backgroundImage = imgs[i];
    i = i + 1;
  }
  setTimeout(changeImage4, 40000);
  function changeImage4() {
    body.style.backgroundImage = imgs[i];
    i = i + 1;
  }
  setTimeout(changeImage5, 50000);
  function changeImage5() {
    body.style.backgroundImage = imgs[i];
    i = 0;
  }
}, 10000);

function start() {
  function gotLocation(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var url_city = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=97112a6caccc48e9bcbc963cea70470b`;

    var fetch_Res_city = fetch(url_city);
    fetch_Res_city
      .then((resp) => {
        response = resp; // Assign resp to the response variable
        return resp.json();
      })
      .then((datas_city) => {
        var my_city =
          datas_city.results[0].components.city ||
          datas_city.results[0].components.town;
        console.log(my_city);
        console.log(response); // Now you can access response here
        weather(my_city);
      })
      .catch((error) => {
        console.error("Error fetching city:", error);
      });
  }

  function ErrorMsg() {
    console.log("Error!");
  }

  navigator.geolocation.getCurrentPosition(gotLocation, ErrorMsg);
}

start();

function user_search() {
  var location = document.getElementById("location").value;
  weather(location);
}

function weather(location) {
  var sunrise_dom_today = document.getElementById("today_sunrise");
  var sunset_dom_today = document.getElementById("today_sunset");
  var sunrise_dom_tomorrow = document.getElementById("tomorrow_sunrise");
  var sunset_dom_tomorrow = document.getElementById("tomorrow_sunset");
  var city_dom = document.getElementById("city");
  var today = new Date();
  var tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  var url_loc = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=97112a6caccc48e9bcbc963cea70470b`;
  var fetch_Res_loc = fetch(url_loc);
  fetch_Res_loc
    .then((resp) => resp.json())
    .then((datas_loc) => {
      var lat = datas_loc.results[0].annotations.DMS.lat;
      var lon = datas_loc.results[0].annotations.DMS.lng;
      var sunrise = datas_loc.results[0].annotations.sun.rise;
      /* ..............................................................................................*/
      console.log(lat, lon, sunrise_hour);
    });
}

var originalHeight = window.innerHeight;
var inputs = document.getElementsByTagName("input");
var container = document.querySelector(".container");
Array.from(inputs).forEach((input) => {
  input.addEventListener("focus", () => {
    setTimeout(function () {
      var shrinkHeight = window.innerHeight;
      var heightDifference = originalHeight - shrinkHeight;
      container.style.height = originalHeight + "px";
      container.style.transform = `translateY(-${heightDifference}px)`;
    }, 140);
  });
  input.addEventListener("blur", () => {
    setTimeout(function () {
      container.style.transform = `translateY(0)`;
    }, 150);
  });
});
