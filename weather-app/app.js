const request = require("request");
const url = "http://api.weatherstack.com/current?access_key=f6f2d33a9253b6091dfd0f65d44d04ec&query=New%20York";

request({ url: url }, (error, response) => {
  const data =JSON.parse(response.body)
  console.log(data)
});
