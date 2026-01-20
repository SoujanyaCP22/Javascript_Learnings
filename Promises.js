
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('OK'), 300);
});

p.then(value => console.log(value)); // → OK
