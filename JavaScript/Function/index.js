// Function

startProgram();

function startProgram(){
    let userName = "Nhi";
    let age = 21;

    happyBirthday(userName, age);
}

function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, "years old!");
}

startProgram();


// Return statement

let area;
let width;
let height;

width = Number(window.prompt("Enter width"));
width = Number(window.prompt("Enter height"));

area = getArea(width, height);

console.log("The area is ", area);

function getArea(width, height){
    // let result = width * height;
    // return result;
    return width * height;
}


// LET - VAR
// let = variables are limited to block scope{}
// var = variables are limited a function(){}
// global = outside any function

for(let i = 1; i <= 3; i++){
    console.log(i)
}
// console.log(i);

function doSomething(){
    for(var i = 1; i <= 3; i++){
        console.log(i)
    }
    // console.log(i);
}
doSomething();

// REST PARAMETER

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

// console.log(sum(a, b));

// function sum(a, b){
//     return a + b;
// }

// function sum(a, b, c){
//     return a + b + c;
// }

// console.log(sum(a, b, c));

// console.log(sum(a, b, c, d));

// function sum(a, b, c, d){
//     return a + b + c + d;
// }

console.log(sum(a, b, c, d, e));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

function sum(x, y, ...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}


// CALLBACK 
// a function passed as an argument to another function

// function sum(x, y){
//     let result = x + y;
//     return result;
// }

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel1").innerHTML = output;
}

// -> callback
summ(2, 3, displayConsole);

function summ(x, y, callBack){
    let result = x + y;
    callBack(result);
}

summ(2, 3, displayDOM);


// Function EXPRESSION -> function without name (anonymous function)

function sayHello(){
    console.log("hello!");
}
sayHello();

const greeting = function(){
    console.log("Hello!");
}
greeting();


let count = 0;

// function increaseCount(){
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount(){
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

document.getElementById("increaseButton").onclick = function(){
    count += 1;
    document.getElementById("myLabel2").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("myLabel2").innerHTML = count;
}


// ARROW function -> compact alternative to a traditional function expression

const greetin = function(userName){
    console.log(`Hello ${userName}`);
}
greetin("Nhi");
// =>
const greet = userName => console.log(`Hello ${userName}`);

greet("Nhi");


const percents = function(x, y){
    return x / y * 100;
}
console.log(`${percents(75, 100)}%`);
// =>
const percent = (x, y) => x / y * 100;

console.log(`${percents(75, 100)}%`);


let grades = [100, 50, 90, 60, 80, 70];

grades.sort(descending);
grades.forEach(print);

function descending(x, y){
    return y - x;
}

function print(element){
    console.log(element);
}

grades.sort((x, y) => y - x)

grades.forEach((element) => console.log(element));