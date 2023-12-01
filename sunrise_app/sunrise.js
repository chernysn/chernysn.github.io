var date_dom = document.getElementById("today_date");
var date_tomorrow_dom = document.getElementById("tomorrow_date");
var today_date = new Date();
var tomorrow_date = new Date(today_date)
tomorrow_date.setDate(today_date.getDate() + 1);

date_dom.innerHTML = today_date.toLocaleDateString();
date_tomorrow_dom.innerHTML = tomorrow_date.toLocaleDateString();

function getDay(day) {
    day = day - 1;
    if (day < 0) {
        day = 6
    };
    return day;
}

var daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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



var imgs = ['url(sunrise_images/weather_6.jpg)', 'url(sunrise_images/weather_14.jpg)', 'url(sunrise_images/weather_13.jpg)', 'url(sunrise_images/weather_9.jpg)', 'url(sunrise_images/weather_5.jpg)'];
var body = document.getElementsByTagName("BODY")[0];
var i = 0;

setInterval(function () {
    setTimeout(changeImage1, 5000);
    function changeImage1() {
        body.style.backgroundImage = imgs[i];
        i = i + 1;
    }

    setTimeout(changeImage2, 10000);
    function changeImage2() {
        body.style.backgroundImage = imgs[i];
        i = i + 1;
    }
    setTimeout(changeImage3, 15000);
    function changeImage3() {
        body.style.backgroundImage = imgs[i];
        i = i + 1;
    }
    setTimeout(changeImage4, 20000);
    function changeImage4() {
        body.style.backgroundImage = imgs[i];
        i = i + 1;
    }
    setTimeout(changeImage5, 25000);
    function changeImage5() {
        body.style.backgroundImage = imgs[i];
        i = 0;
    }
}, 5000);

function start() {

    function gotLocation(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        var url_city = `https://geocode.maps.co/search?q=${lat},${lon}`;

        var fetch_Res_city = fetch(
            url_city);
        fetch_Res_city.then(resp_city =>
            resp_city.json()).then(datas_city => {
                var my_location = datas_city[0].display_name;
                var my_city = my_location.split(",");
                my_city = my_city[2];
                console.log(my_city);

                weather(my_city);
            });

    }

    function ErrorMsg() {
        console.log("Error!")
    }

    navigator.geolocation.getCurrentPosition(gotLocation, ErrorMsg);

}

start();

function user_search() {
    var location = document.getElementById("location").value;
    weather(location);
}

function weather(location) {
    var weather_info = document.getElementById("weather_info");
    var city_date = document.querySelector(".city_date");
    var temp = document.querySelector(".temp");
    var sunrise_dom_today = document.getElementById("today_sunrise");
    var sunset_dom_today = document.getElementById("today_sunset");
    var sunrise_dom_tomorrow = document.getElementById("tomorrow_sunrise");
    var sunset_dom_tomorrow = document.getElementById("tomorrow_sunset");
    var date_dom = document.getElementById("date");
    var city_dom = document.getElementById("city");
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);


    var url_loc = `https://geocode.maps.co/search?q=${location}`;
    var fetch_Res_loc = fetch(
        url_loc);
    fetch_Res_loc.then(resp =>
        resp.json()).then(datas_loc => {
            var lat = datas_loc[0].lat;
            var lon = datas_loc[0].lon;
            console.log(lat, lon)


            let url3 = `https://api.weather.gov/points/${lat},${lon}`;
            console.log(url3);
            let fetch_Res3 = fetch(
                url3);
            fetch_Res3.then(resp3 =>
                resp3.json()).then(datas3 => {

                    let url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=${today}`;
                    console.log(url);
                    let fetch_Res = fetch(
                        url);
                    fetch_Res.then(resp =>
                        resp.json()).then(datas => {
                            var sunrise_today = datas.results.sunrise;
                            var sunset_today = datas.results.sunset;
                            console.log(sunrise_today, sunset_today);

                            let url_tomorrow = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=${tomorrow}`;
                            console.log(url_tomorrow);
                            let fetch_Res_tomorrow = fetch(
                                url_tomorrow);
                            fetch_Res_tomorrow.then(resp_tomorrow =>
                                resp_tomorrow.json()).then(datas_tomorrow => {
                                    var sunrise_tomorrow = datas_tomorrow.results.sunrise;
                                    var sunset_tomorrow = datas_tomorrow.results.sunset;
                                    console.log(sunrise_tomorrow, sunset_tomorrow);



                                    function capitalize(name) {
                                        let lower_case_name = name.toLowerCase();
                                        let name_list = lower_case_name.split(" ");
                                        console.log(name_list);
                                        let list = [];
                                        name_list.forEach((word, i) => {
                                            if (word != "") {
                                                let x = word[0].toUpperCase() + word.slice(1);
                                                list.push(x);
                                                console.log("X and I", x, i)
                                            }
                                        });
                                        return list.join(" ");
                                    }

                                    let location2 = capitalize(location);


                                    city_dom.innerHTML = `${location2}`;
                                    sunrise_dom_today.innerHTML = `${sunrise_today}`;
                                    sunset_dom_today.innerHTML = `${sunset_today}`;
                                    sunrise_dom_tomorrow.innerHTML = `${sunrise_tomorrow}`;
                                    sunset_dom_tomorrow.innerHTML = `${sunset_tomorrow}`;

                                })
                        })
                })
        })

};


var mobile_input = document.getElementById("location");
var mobile_offset_screen = document.querySelector(".weather_info");

mobile_input.addEventListener('focus', () => {
    if (window.innerHeight < 570) {
        mobile_offset_screen.style.transform = "translateY(-55%)";
    } else {
        mobile_offset_screen.style.transform = "translateY(-25%)";

    }
})

mobile_input.addEventListener('blur', () => {
    setTimeout(function () {
        mobile_offset_screen.style.transform = "translateY(0)";
    }, 250
    )
})