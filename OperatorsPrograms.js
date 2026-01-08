
// WAP to perform arithmetic operations
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);


// WAP to demonstrate assignment operators
let x = 10;

x += 5;    // x = x + 5
console.log("x += 5 :", x);

x -= 3;    // x = x - 3
console.log("x -= 3 :", x);

x *= 2;    // x = x * 2
console.log("x *= 2 :", x);

x /= 4;    // x = x / 4
console.log("x /= 4 :", x);


// WAP using ternary operator
let marks = 75;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);



// WAP using nullish coalescing
let username = null;
let nameToShow = username ?? "Guest";

console.log(nameToShow);


// WAP using optional chaining
let user = {
  profile: {
    name: "Soujanya",
    city: "Bang"
  },
  address: {
    city: "Banglore"
  }
};

console.log(user.profile?.name);
console.log(user.profile?.city);
console.log(user.address?.city);  // Safe access
