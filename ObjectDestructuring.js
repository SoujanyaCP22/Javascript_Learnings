
const user = { id: 101, name: "Soujanya", role: "QA" };

// Basic destructuring
const { id, name } = user;
console.log(id, name); // 101 Soujanya
  


// Rename variables
const { role: jobTitle } = user;
console.log(jobTitle); // QA


// Default values
const { city = "Bengaluru" } = user;
console.log(city); // Bengaluru


// Nested destructuring

const config = {
  http: { timeout: 5000, retries: 3 },
  env: "UAT"
};

const { http: { timeout, retries }, env } = config;
console.log(timeout, retries, env); // 5000 3 UAT

//Rest with Destructuring
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a, rest); // 1 { b: 2, c: 3 }
