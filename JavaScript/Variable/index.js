let age = 21;    // create variable
age = age - 1;
console.log(age);

let firstName = "Nguyen";
// let firstName = 'Nguyen';
console.log(firstName)

let student = true;
console.log(student);

let str = "21";
str = str + 1;
console.log(str);

console.log("Hello,", firstName);
console.log("You are", age, "years old");   // no need space
console.log("Enrolled:", student);

// Display
document.getElementById("p1").innerHTML = "Hello " + firstName
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student