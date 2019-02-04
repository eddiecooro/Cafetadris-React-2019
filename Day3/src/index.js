// function add(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// let add = a => b => a + b;

// let alphabeticNumbers = [
//   'One',
//   'Two',
//   'Five',
//   'Three',
//   'Four',
//   'One'
// ];

// let numbers = alphabeticNumbers.filter(
//   alphabeticNumber =>
//     !alphabeticNumber.includes('e')
// );

// console.log(numbers);

/* ------------------------------ */
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let numbers = [
//   1241,
//   41,
//   3523,
//   123,
//   152,
//   2,
//   23,
//   5,
//   5,
//   457,
//   47,
//   57,
//   4
// ];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// let sum = numbers.reduce(
//   (previousValue, currentValue) => {
//     console.log('PREV:', previousValue);
//     console.log('CURRENT:', currentValue);
//     console.log('--------------------------');
//     return previousValue + currentValue;
//   },
//   0
// );

// console.log(sum);

// let multiple = numbers
//   .filter(number => number % 2 === 0)
//   .map(number => number / 2)
//   .reduce(
//     (multiple, currentValue) =>
//       multiple * currentValue,
//     1
//   );

// numbers.every(number => number % 2 !== 0);
// numbers.some(number => number % 2 !== 0);

// console.log(multiple);

// let mappedArray = numbers.reduce(
//   (prevArray, currentValue) => {
//     prevArray.push(currentValue / 2);
//     return prevArray;
//   },
//   []
// );
// let mappedWithJSArray = numbers.map(
//   number => number / 2
// );
// console.log(mappedArray);
// console.log(mappedWithJSArray);

// let myself = {
//   name: 'Eddie',
//   age: 20,
//   email: '1300100eddiecooro@gmail.com'
// };

// let { age = 10, ...myselfWithoutAge } = myself;
// let fruits = ['Apple', 'Banana', 'Orange'];
// let [apple, banana, ...fruitsWithoutApple] = fruits;

// let name = myself.name;
// let age = myself.age;
// let email = myself.email;

// console.log('Myself', myself);
// console.log('Age:', age);
// console.log('Rest:', myselfWithoutAge);
// console.log('Fruits', fruits);
// console.log('Apple', apple);
// console.log('Rest', fruitsWithoutApple);

// function logMyself({
//   name = 'Asghar',
//   age = 0,
//   email = '',
//   language = 'Persian'
// }) {
//   console.log('Name:', name);
//   console.log('Age:', age);
//   console.log('Email:', email);
//   console.log('language:', language);
// }

// let myself = {
//   name: 'Eddie',
//   age: 20,
//   email: '1300100eddiecooro@gmail.com'
// };

// logMyself(myself);

// function add(a = 0, b = 0) {
//   console.log('A', a);
//   console.log('B', b);
//   return a + b;
// }

// console.log(add());

// let myself = {
//   name: 'Eddie',
//   age: 20,
//   email: '1300100eddiecooro@gmail.com'
// };
// let friend = {
//   name: 'Mohammad',
//   age: 19,
//   email: 'techshow78@gmail.com'
// };
// let { name, age, email } = myself;
// let {
//   name: friendName,
//   age: friendAge,
//   email: friendEmail
// } = friend;
// let friendName = friend.name;
// let friendAge = friend.age;
// let friendEmail = friend.email;

// console.log(name);
// console.log(friendName);

// class Person {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }

// getUppercaseName() {
//   return this.name.toUpperCase()
// }
//   getUppercaseName = () => {
//     return this.name.toUpperCase();
//   };
// }

// const myself = new Person(
//   'Eddie',
//   20,
//   '1300100eddiecooro@gmail.com'
// );
// const friend = new Person(
//   'Mohammad',
//   19,
//   'techshow78@gmail.com'
// );
// console.log(myself.getUppercaseName());
// console.log(friend);

// class Student extends Person {
//   constructor(name, age, email, grade) {
//     super(name, age, email);
//     this.grade = grade;
//   }
// }

// const mystudent = new Student('abc', 12, '', 4);
// console.log(mystudent);

// const number = 4;
// let isEven = number % 2 === 0 ? true : false;
// let isEven;
// if (number % 2 === 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }
// console.log('Is ' + number + ' Even? ' + isEven);
