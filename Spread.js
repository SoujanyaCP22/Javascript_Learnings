//copy arrays
const a=[1,2];
const copy=[...a];
console.log(a);
console.log(copy);

const nested= [{x:1}];
const copyNested = [...nested];
console.log(nested);
console.log(copyNested);

//Merge Arrays
const x=[1,2];
const y=[4,8];
const merged=[...x,...y];
console.log(x);
console.log(y);
console.log(merged);

//Insert/append elements
const base=[1,4];
const withMiddle=[1,2,3,...base];
console.log(base);
console.log(withMiddle);


//convert iterables to arrays
const str="QA";
const chars=[...str];
console.log(chars);

// //const nodeList = document.querySelectorAll("li");
// const items=[...nodeList];
// console.log(items);


//Spread with function Calls
//Pass array elements as separate arguments:
const nums=[10,20,30];
Math.max(...nums);

function log3(a,b,c){ console.log(a,b,c);}
log3(...nums);

//Combine dynamic and fixed args
const extra = [4, 5];
const result = [1, 2, ...extra, 6];

function log4(a,b,c,d,e){ console.log(a,b,c,d,e);}
log4(...result);


//Spread with Objects
// Copy objects (shallow)
const user = { id: 101, name: "Soujanya" };
const copyed = { ...user };
console.log(copyed);

//Merge/override properties
//Order matters: last spread wins.
const defaults = { retries: 3, timeout: 5000 };
const options = { timeout: 2000, baseURL: "/api" };
const config = { ...defaults, ...options };// { retries: 3, timeout: 2000, baseURL: "/api" }
console.log(config);


//Add/transform properties inline
const run = { id: 1, status: "pass" };
const enriched = { ...run, status: run.status.toUpperCase(), at: new Date() };
console.log(enriched);
