let username = "Nhinhi:>";

username = username.trim(); // remove double space

console.log(username.length);

console.log(username.charAt(0));

console.log(username.indexOf("i"));

console.log(username.lastIndexOf("n"));

console.log(username.toUpperCase());

console.log(username.toLowerCase());


let phoneNumber = "123-456-7890"

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);


// Slice()

let fullName = "Grass Nhi";
let firstName;
let lastName;

lastName = fullName.slice(6);
firstName = fullName.slice(0, 5)

lastName = fullName.slice(fullName.indexOf(" ") + 1);
firstName = fullName.slice(0, fullName.indexOf(" "));

console.log(lastName);
console.log(firstName);


// Method Chaining

let userName = "nhi";

let letter = userName.charAt(0).toUpperCase();

console.log(letter);


// Format currency

let myNum = 123456.789;

// myNum = myNum.toLocaleString("en-US");  //123,456.789
// myNum = myNum.toLocaleString("hi-IN");      // Hindi 1,23,456.789
// myNum = myNum.toLocaleString("de-DE");      // 123.456,789
// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USA"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = .5;
// myNum = myNum.toLocaleString(undefined, {style: "percent"})

myNum = 100;
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);