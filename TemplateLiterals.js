//Interpolation with ${...} - Anything inside ${ ... } is evaluated as JavaScript.
const a = 5, b = 7;
console.log(`${a} + ${b} = ${a + b}`);
// → 5 + 7 = 12



const upper = s => s.toUpperCase();
console.log(`Hi, ${upper('team')}!`);
// → Hi, TEAM!

//Multiline Strings

const multi = `
Line 1
Line 2
Line 3
`;
console.log(multi);


// Expressions
const items = [1, 2, 3];
console.log(`Count: ${items.length}, Sum: ${items.reduce((a,b)=>a+b, 0)}`);

//Objects
const user = { name: "Soujanya", city: "Bengaluru" };
console.log(`User: ${user.name} from ${user.city}`);


//Conditional formating(ternary)
const passed = true;
console.log(`Status: ${passed ? 'PASS' : 'FAIL'}`);


console.log(`Print \${...} literally`);
console.log(`This has a backtick: \``);


const lang = 'JS';
const msg = `Learning ${`${lang} template literals`}`;
console.log(msg);
// → Learning JS template literals
