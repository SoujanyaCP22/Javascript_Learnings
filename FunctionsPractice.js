
function add(a, b) {
  return a + b;
}
// Test
console.log(add(2, 3)); // 5



//Arrow functions
const greet = name => `Hello, ${name}`;
// Test
console.log(greet("Soujanya")); // Hello, Soujanya


//Default parameters
function power(base, exp = 2) {
  return base ** exp;
}
console.log(power(5));     // 25
console.log(power(2, 3));  // 8

//Rest parameters
const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);
console.log(sumAll(1, 2, 3, 4)); // 10


