// function helloWorld() {
//   console.log('Hello World');
// }

// function goodbyeWorld() {
//   console.log('Goodbye world');
// }

// function apply(inputFunction, a) {
//   inputFunction(a);
// }

// function runInputWith8(inputFunction) {
//   inputFunction(8);
// }

// apply(helloWorld);
// apply(goodbyeWorld);
// addByOne(5);
// apply(addByOne, 5);

// let addByTwo = a => {
//   console.log(a + 2);
// };

// runInputWith8(a => {
//   console.log(a + 10);
// });
// runInputWith8(a => {
//   console.log(a + 25);
// });

// let add = function(a) {
//   return function(b) {
//     return a + b;
//   };
// };

// let addByOne = add(1);
// let addByTwo = add(2);
// let addByTwenty = add(20);
// console.log(addByOne(6));
// console.log(addByTwenty(30));
// console.log(addByTwo(4));
// console.log(addByOne(8));
// console.log(add(1)(7));

let cities = [
  'Mashhad',
  'Qhom',
  'Paris',
  'Shiraz',
  'Yazd',
  'Esfahan',
  'Tehran',
  'Myami'
];

// cities.forEach(function(city, index) {
//   console.log(index + ' ' + city);
// });
// let upperCaseCities = [];
// for (let i = 0; i < cities.length; i++) {
//   upperCaseCities.push(cities[i].toUpperCase());
// }

// let uppercaseCities = cities.map(function(
//   city,
//   index
// ) {
//   return city.toUpperCase();
// });

// console.log(cities);
// console.log(uppercaseCities);

let citiesWithM = cities
  .filter((city, index) => {
    return city.includes('M');
  })
  .map(city => {
    return city.toUpperCase();
  });
let citiesWitha = cities.filter((city, index) => {
  return city.includes('a');
});

console.log(cities);
console.log(citiesWithM);
console.log(citiesWitha);
