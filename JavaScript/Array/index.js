let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]);

fruits[0] = "coconut";

console.log(fruits);
console.log(fruits[0]);

fruits.push("lemon");   // add
fruits.pop();           // remove the last
fruits.unshift("mango");    // add to beginning
fruits.shift();         // reomve the first

let length = fruits.length;
// let index = fruits.indexOf("banana");
let index = fruits.indexOf("kiwi");

console.log(index);


// LOOP

let prices = [5, 10, 15, 20, 25];

for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}

for(let i = prices.length - 1; i >= 0; i-=1){
    console.log(prices[i]);
}

for(let price of prices){
    console.log(price);
}


// SORT

for(let fruit of fruits){
    console.log(fruit);
}

fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}


// 2D ARRAY

let vegetable = ["carrots", "onions", "potatoes"];
let meat = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetable, meat];

for(let list of groceryList){
    console.log(list);
}

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}

groceryList[2][0] = "steak";

console.log(groceryList[2][0]);


// Spread operator

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
console.log(...numbers);    // 1 2 3 4 5 6 7 8 9

let userName = "Grass Nhi";
console.log(...userName);   // G r a s s   N h i

let maximun = Math.max(...numbers);
console.log(maximun);

let class1 = ["n", "h", "i"];
let class2 = ["k", "i", "m"];

// class1.push(class2);
class1.push(...class2);
console.log(class1);
console.log(...class1);


// array.forEach() -> executes a provided callback function once for each arr element

let students = ["nhi", "nhi:.", "nhi :>"];

students.forEach(capitalize);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

students.forEach(print);


// array.map() 
// -> executes a provided callback function once for each arr element and create a new array

numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);

function square(element){
    return Math.pow(element, 2);
}

squares.forEach(print);

function cube(element){
    return Math.pow(element, 3);
}

let cubes = numbers.map(cube);
cubes.forEach(print);


// array.filter() -> create arr with all elements that pass the test provided by a function

let ages = [18, 16, 21, 27, 19, 90];

function checkAge(element){
    return element >= 18;
}

let adults = ages.filter(checkAge);

adults.forEach(print);


// array.reduce() -> reduces an array to single value

prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`)

function checkOut(total, element){
    return total + element;
}


// SORT arr of nums

let grades = [100, 50, 99, 60, 80, 70];

function descendingSort(x, y){
    return y - x;
}

grades = grades.sort(descendingSort);
grades.forEach(print);

function ascendingSort(x, y){
    return x - y;   // compare
}

// The sort() method uses the return value of the comparator function to determine the sort order. 
// If the comparator function returns a negative value, it means that x should come before y. 
// If the function returns a positive value, it means that y should come before x. 
// If the function returns 0, it means that the order of x and y remains unchanged.

grades = grades.sort(ascendingSort);
grades.forEach(print);


// SHUFFLE An array

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

shuffle(cards);

cards.forEach(print);
cards.forEach(card => console.log(card));


// NESTED function

let name = "Nhi";
let inbox = 0;

function login(){
    displayName();
    displayInbox();
}

function displayName(){
    console.log(`Welcome ${name}`);
}

function displayInbox(){
    console.log(`You have ${inbox} new messages`);
}

login();

function login(){
    displayName();
    displayInbox();

    function displayName(){
        console.log(`Welcome ${name}`);
    }
    
    function displayInbox(){
        console.log(`You have ${inbox} new messages`);
    }   
}   // nested function

