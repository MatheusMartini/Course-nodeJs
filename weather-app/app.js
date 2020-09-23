const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=f6f2d33a9253b6091dfd0f65d44d04ec&query=New%20York&units=m";

request({ url: url,json:true }, (error, response) => {
  // console.log(response.body.current)
  let temperature = response.body.current.temperature;
  let probabilityRain = response.body.current.precip;
  let climate = response.body.current.weather_descriptions;
  console.log(' the temperature is '+ temperature +' and probability of rain is ' + probabilityRain);
  console.log('today are ' + climate )
});
