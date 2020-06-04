const fs = require('fs');

const cars = {
  name: 'mustang',
  marca: 'ford',
  price: 9999,
};
const carsJSON = JSON.stringify(cars);

//fs.writeFileSync('fileJson.json', carsJSON);
//add in fileJson.json the params pass in const cars 

const dataBuffer = fs.readFileSync('fileJson.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
