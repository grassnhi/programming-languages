// setTimeout()

let item = "cryptocurrrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 3000);
let timer3 = setTimeout(thirdMessage, 3000);

function firstMessage(item, price){
    alert(`Buy this ${item} for ${price}`);
}

function secondMessage(item, price){
    alert(`This is not a scam`);
}

function thirdMessage(){
    alert(`Do ittt`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
}


// setInterval()

let count = 0;
let max = window.prompt("Count up to what numbers");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}


// Date object

// let date = new Date();
// let date = new Date(10000000000);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
let date = new Date("January 1, 2023 00:00:00");

console.log(date);

// date = date.toLocaleString();

// console.log(date);

document.getElementById("myLabel").innerHTML = date;

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);

date = date.toLocaleString();

console.log(date);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month} ${day} ${year}`;
}

document.getElementById("myLabel").innerHTML = formatDate(date);

function formatTime(date){
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hour >= 12 ? "pm" : "am";

    hour = (hour % 12) || 12;

    return `${hour}:${minutes}:${seconds}`;
}


// Asynchronous
console.log("START");
console.log("This step is synchronous");
console.log("END");

console.log("START");
setTimeout(() => console.log("This step is asynchronous"), 5000);
console.log("END");


// console.time()

console.time("Response time");

// alert("CLICK THE OK BUTTON");
setTimeout(() => console.log("Hello!"), 3000);

console.timeEnd("Response time");