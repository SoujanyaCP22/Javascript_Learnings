//Q1
let a = 1;
console.log(a++ + ++a); // 4

//Q2
console.log(+true, +false, +"3.14", +null, +undefined, +""); //1 0 3.14 0 NaN 0

//Q3
console.log(5 % -2, -5 % 2, -5 % -2); // 1, -1, -1

//Q4
let x = "2";
console.log(x++);  // 3
console.log(typeof x, x); // number 3

//Q5
let s = "a";
s += 1; // a1
console.log(s, typeof s); // a1, String


//Q6
let n = 10;
n *= "2"; // 20
console.log(n, typeof n); // 20 number

//Q7
let i = 0;
i = i++ + ++i;// 1+ 1
console.log(i); // 2

//Q8
console.log(null == undefined, null === undefined); // true , false

//Q9
console.log([] == ![]); // true

//Q10
//console.log([1,2] == "1,2", [1,2] === "1,2"); //  true ,false

//Q11
console.log(NaN == NaN, NaN === NaN, Object.is(NaN, NaN)); // false false true

