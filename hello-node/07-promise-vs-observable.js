// function timeout(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // appel le callback du .then
//       resolve();
//     }, delay);
//   });
// }


// timeout(1000)
//   .then(() => console.log('1s'));

const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      // appel le callback du .then
      observer.next();
    }, delay);
  });
}

interval(1000)
  .subscribe(() => console.log('1s'));
