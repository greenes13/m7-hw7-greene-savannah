var cityWrapper = document.querySelectorAll('#city-wrapper h1 span');
var weatherWrapper = document.querySelectorAll('#weather-wrapper p span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var apiResult = JSON.parse(this.responseText);

        var cityName = document.createTextNode(apiResult.name);
        cityWrapper[0].appendChild(cityName);

        var weatherType = document.createTextNode(apiResult.weather[0].main);
        weatherWrapper[0].appendChild(weatherType);
  }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=70130,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
