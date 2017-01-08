$(document).ready(function() {
  var latCoord;
  var lonCoord;

  $.getJSON("http://ip-api.com/json", function(data2){
    latCoord = data2.lat;
    lonCoord = data2.lon;
    var kelvin;
    var fahrenheit;
    var celsius;
    var trigger = true;
console.log(data2);
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latCoord + '&lon=' + lonCoord + '&appid=901649184146033d3a9ffb8ca311549f';

    $.getJSON(api, function(data) {
      
      var weatherDescription = data.weather[0].description;
      kelvin = data.main.temp;
      var city = data.name;
      var country = data.sys.country;

      fahrenheit = ((kelvin * (9/5)) - 459.67).toFixed(1) + "&#8457";
      celsius = (kelvin - 273.15).toFixed(1) + "&#8451";

      var imgUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  
      $('#icon').attr( "src", imgUrl);
      console.log(city);
      $('#location').html(city + ", " + country.toUpperCase());
      $('#desc').html(weatherDescription);
      $('#temp').html(celsius);

      $('#temp').on('click', function() {
        if(trigger) {
          $('#temp').html(fahrenheit);
          trigger = false;
        } else {
          $('#temp').html(celsius);
          trigger = true;
        }
      });
    });

  });  
});
