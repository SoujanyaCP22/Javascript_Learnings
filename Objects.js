//Object.create(proto)
const proto = { kind: "base" };
const obj = Object.create(proto);
obj.x = 10;
console.log(obj.kind); // "base"


//Classes 
class Person {
  constructor(name) {
    this.name = name;
  }
  say() { return `Hi ${this.name}`; }
  static species() { return "Homo sapiens"; }
}

const p = new Person("Soujanya");
console.log(p);


//Property Access
const obj1 = { "first-name": "Soujanya", role: "QA", 1: "one" };
console.log(obj1.role);
console.log(obj1["first-name"]);
console.log(obj1[1]);


const o={};
o.a = 1;
console.log(o);
o.b=1;
console.log(o);


//JSON vs JS Object

// JSON string
const json = '{"id":101,"name":"Soujanya","skills":["Functional","Automation"],"active":true}';
console.log("JSON", json);

// JS object
const obj2 = { id: 101, name: "Soujanya", skills: ["Functional", "Automation"], active: true };
console.log("JSON Obj",obj2);

JSON.stringify({ n: NaN, p: Infinity }); // {"n":null,"p":null}
console.log(JSON);



// const a = {}; a.self = a;
// JSON.stringify(a); // TypeError: Converting circular structure to JSON


function safeStringify(value, space = 0) {
  const seen = new WeakSet();
  return JSON.stringify(value, (k, v) => {
    if (typeof v === "object" && v !== null) {
      if (seen.has(v)) return "[Circular]";
      seen.add(v);
    }
    return v;
  }, space);
  console.log(seen);
}



