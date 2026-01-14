const arr=[10, 20, 30, 40, 50];
// Basic destructuring
const [a,b]= arr;
console.log(a,b);


//Skip elements
const[,,,d,e,f]= arr;
console.log(d,e,f);


// Default values
const [x, y, z = 100] = [1, 2,200];
console.log(x, y, z); // 1 2 10



// Swap variables
let p = 1, q = 2;
console.log("Before swapping values of p and q",p,q);
[p, q] = [q, p];
console.log("After swapping values of p and q",p, q); // 2 1
