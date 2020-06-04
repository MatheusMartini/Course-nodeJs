const fs = require('fs');

const cars = {
  name: 'mustang',
  planet: 'ford',
  age: 20,
};
const carsJSON = JSON.stringify(cars);

//fs.writeFileSync('fileJson.json', carsJSON);
//add in fileJson.json the params pass in const cars 
const dataBuffer = fs.readFileSync('fileJson.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Martini',
data.age = 20

const userData = JSON.stringify(data)
fs.writeFileSync('fileJson.json', userData);
