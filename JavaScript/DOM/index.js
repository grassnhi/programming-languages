// DOM = Document Object Model (API)

console.log(document);  // display DOM

console.dir(document);  // list properties

console.log(document.title);

console.log(document.URL);

document.title = "Title go here!";
// document.location = "htttp://www.google.com";

document.body.style.backgroundColor = "skyblue";
document.getElementById("myDiv").innerHTML = "Hello";


// ELEMENT SELECTORS

let element = document.getElementById("myTittle");

element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "lightgreen";

let item1 = document.querySelector("#myTittle");
item1.style.backgroundColor = "lightgreen";

let item2 = document.querySelector(".desserts");
item2.style.backgroundColor = "lightgreen";

let item3 = document.querySelector("li");
item3.style.backgroundColor = "lightgreen";

let item4 = document.querySelector("[for]");
item4.style.backgroundColor = "lightgreen";

let items = document.querySelectorAll("li");
items.forEach(item => {
    item.style.backgroundColor = "lightgreen";
})


// DOM TRAVERSAL

let element = document.body;
let child = element.firstElementChild;

console.log(child);

// child.style.backgroundColor = "lightgreen";

let elements = document.querySelector("#vegetables");
let parent = elements.parentElement;
let sibling1 = elements.previousElementSibling;
let sibling2 = elements.nextElementSibling;

// parent.style.backgroundColor = "green";
// sibling2.style.backgroundColor = "lightgreen";

let fruit = document.querySelector("#fruit");
let fruitChild1 = fruit.firstElementChild;
let fruitChild2 = fruit.lastElementChild;
let fruitChild = fruit.children[1];

// parent.style.backgroundColor = "green";
// fruitChild2.style.backgroundColor = "lightgreen";
// fruitChild.style.backgroundColor = "lightgreen";

let children = Array.from(fruit.children);

children.forEach(child => child.style.backgroundColor = "lightgreen");


// ADD - CHANGE HTML elements

const nameTag = document.createElement("h1");

nameTag.innerHTML = "Nhi";
// nameTag.innerHTML = window.prompt("Enter your name");

document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");

listItem.textContent = "mango";

myList.prepend(listItem);
myList.append(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);


// Change CSS PROPERTIES

const tittle = document.getElementById("myTittle");

tittle.style.backgroundColor = "#222222";
tittle.style.color = "rgb(50, 200, 250)";
tittle.style.fontFamily = "consolas";
tittle.style.textAlign = "center";
tittle.style.border = "2px solid";
tittle.style.display = "block";


// EVENT


const elementa = document.getElementById("myButton");
elementa.onclick = doSth;

function doSth(){
    alert("You did sth");
}

const elementb = document.body;
elementb.onload = doSth;

const elementc = document.getElementById("myText");
elementc.onchange = doSth;

const elementd = document.getElementById("myDiv");
elementd.onmouseover = doSthing;
elementd.onmouseout = doSthingElse;
elementd.onmousedown = doSomething;
elementd.onmousedown = doSomethingElse;

function doSthing(){
    elementd.style.backgroundColor = "red";
}

function doSthingElse(){
    elementd.style.backgroundColor = "green";
}

function doSomething(){
    elementd.style.backgroundColor = "lightgreen";
}

function doSomethingElse(){
    elementd.style.backgroundColor = "blue";
}


// addEventListener(event, function, useCapture)

const innerDiv = document.getElementById("innerDiv");

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);

function changeRed(){
    innerDiv.style.backgroundColor = "red";
}

function changeGreen(){
    innerDiv.style.backgroundColor = "lightgreen";
}

const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}.`);
    this.style.backgroundColor = "lightblue";
}


// SHOW - HIDE HTML element

const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () => {
    // console.log(myImg.style.display);
    // if(myImg.style.display == "none"){
    //     myImg.style.display = "block";
    // }else{
    //     myImg.style.display = "none";
    // }
    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visiable";
    }else{
        myImg.style.visibility = "hidden";
    }
})


// Detect KEY PRESS

const myDiv = document.getElementById("myDiv");

// window.addEventListener("keydown", event => console.log(event.key));
window.addEventListener("keydown", move);

let x = 0;
let y = 0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            y += 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5;
            myDiv.style.left = x + "px";
            break;
        default:
            break;
    }
}
