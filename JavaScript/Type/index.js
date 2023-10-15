// Type Conversion
let age = window.prompt("How old are you?");

console.log(typeof age);

// age += 1;

console.log("You are", age, "years old");


age = Number(age);
console.log(typeof age);

age += 1;
console.log("You are", age, "years old");

let x;
let y;
let z;
let zz;

x = Number("3.14");
y = String(3.14);
z = Boolean(""); // nothing = false, sth = true
zz = Boolean("nhi");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(zz, typeof zz);