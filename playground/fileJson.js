const fs = require('fs');

const cars = {
  name: 'mustang',
  marca: 'ford',
  price: 9999
};
const carsJSON = JSON.stringify(cars);

fs.writeFileSync('fileJson.json', carsJSON);

const carsParse = JSON.parse(carsJSON);
console.log(carsParse);
