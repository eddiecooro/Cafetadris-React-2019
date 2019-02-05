import FiboWorker from 'worker-loader!./fib.js'; // This syntax is because of webpack worker-loader module. see the standard syntax from here: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// }

// // wait(5000).then(ms => {
// //   console.log('After ' + ms / 1000 + ' seconds');
// // });

// fetch('https://reqres.in/api/users')
//   .then(res => {
//     return res.json();
//   })
//   .then(responseJson => {
//     console.log('1:', responseJson);
//   })
//   .then(() => wait(2000))
//   .then(ms => {
//     console.log('Fetching after ' + ms);
//     return fetch('https://reqres.in/api/users?page=2');
//   })
//   .then(res2 => {
//     return res2.json();
//   })
//   .then(res2Json => {
//     console.log('2:', res2Json);
//   })
//   .catch(err => {
//     console.log('err is', err);
//     throw err;
//   })
//   .catch(err => {
//     console.log('Second err', err);
//   });

// console.log('Hello');

// function fact(number) {
//   return new Promise((resolve, reject) => {
//     if (number <= 1) resolve(1);
//     fact(number - 1).then(factNumMinusOne => {
//       resolve(number * factNumMinusOne);
//     });
//   });
// }

// function fib(number) {
//   return new Promise((resolve, reject) => {
//     if (number <= 1) return resolve(1);
//     fib(number - 2).then(fibNumberMinus2 => {
//       fib(number - 1).then(fibNumberMinus1 => {
//         return resolve(fibNumberMinus1 + fibNumberMinus2);
//       });
//     });
//   });
// }

// async function fib(number) {
//   throw new Error('h');
//   if (number <= 1) return 1;
//   return (await fib(number - 1)) + (await fib(number - 2));
// }

// fib(2000)
//   .then()
//   .catch(err => {
//     console.log(err); // h
//   });

// fib(30).then(f => {
//   console.log(f);
// });

// fact(27).then(fact => {
//   console.log('Factorial is', fact);
// });

// fib(25).then(fib => {
//   console.log('Fib is', fib);
// });

// console.log('Hi');

// async function request() {
//   try {
//     const response = await fetch('https://reqres.in/api/users');
//     const responseJson = await response.json();
//     console.log('1:', responseJson);
//     const ms = await wait(2000);
//     console.log('Fetching after ' + ms);
//     const secondResponse = await fetch(
//       'https://reqres.in/api/users?page=2'
//     );
//     const secondResponseJson = await secondResponse.json();
//     console.log('2:', secondResponseJson);
//     return 'Hello';
//   } catch (e) {
//     console.log('err is', err);
//   }
// }

// request().then(h => {
//   console.log('Done', h);
// });

/* Non blocking fib */

/* Promise style */
// function fib(number) {
//   return new Promise((resolve, reject) => {
//     if (number <= 1) return resolve(1);
//     /* setImmediate(x) ~= setTimeout(x, 0) */
//     setImmediate(() => {
//       Promise.all([fib(number - 2), fib(number - 1)]).then(
//         ([fibNumberMinus2, fibNumberMinus1]) => {
//           return resolve(fibNumberMinus1 + fibNumberMinus2);
//         }
//       );
//     });
//   });
// }

/* callback style */
// function fib(number, cb) {
//   if (number <= 0) return cb(1);
//   else {
//     let fibNumberMinus1;
//     let fibNumberMinus2;
//     setImmediate(() => {
//       fib(number - 1, fibNumberMinus1Res => {
//         fibNumberMinus1 = fibNumberMinus1Res;
//         if (fibNumberMinus2) cb(fibNumberMinus1 + fibNumberMinus2);
//       });
//     });
//     setImmediate(() => {
//       fib(number - 2, fibNumberMinus2Res => {
//         fibNumberMinus2 = fibNumberMinus2Res;
//         if (fibNumberMinus1) cb(fibNumberMinus1 + fibNumberMinus2);
//       });
//     });
//   }
// }

// fib(20, fib => {
//   console.log('FIB', fib);
// });

// fib(20).then(fib => {
//   console.log('FIB', fib);
// });

/* WebWorker style (best way to do heavy computing) */
// const w = new FiboWorker();
// w.onmessage = function(message) {
//   console.log('Fib number is', message.data);
// };
// w.postMessage(40);
