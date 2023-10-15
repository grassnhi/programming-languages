class Player{
    score = 0;

    pause(){
        console.log("You pause the game");
    }

    exit(){
        console.log("You exited the game.")
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();


// Constructor

class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Nhi", 21, 100);
const student2 = new Student("Hien", 17, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);

student2.study();


// STATIC keyword

class Car{
    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
const car5 = new Car("Lambo");

console.log(Car.numberOfCars);

Car.startRace();


// INHERITANCE

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }

    sleep(){
        console.log(`This ${this.name} is slepping.`); 
    }
}

class Rabbit extends Animal{
    
    name = "rabiit";

    run(){
        console.log(`This ${this.name} is running.`); 
    }
}

class Fish extends Animal{
    
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swim.`); 
    }
}

class Hawk extends Animal{
    
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying.`); 
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();


// SUPER keyword

class Animals{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbits extends Animals{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fishes extends Animals{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawks extends Animals{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit1 = new Rabbits("rabbit", 1, 40);
const fish1 = new Fishes("fish", 2, 80);
const hawk1 = new Hawks("hawk", 3, 200);

console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);

console.log(fish1.name);
console.log(fish1.age);
console.log(fish1.swimSpeed);

console.log(hawk1.name);
console.log(hawk1.age);
console.log(hawk1.flySpeed);


// GETTER AND SETTER

class Cars{
    constructor(power){
        this._gas = 25;
        this._power = power; // _power: protected property
    }

    get power(){
        return `${this._power}hp`;
    }

    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }

    set gas(value){
        if(value > 50){
            value = 50;
        }else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Cars(400);

car._power = 1000;
car.gas = 100;

console.log(car.power);
console.log(car.gas);


// OBJECTS as Arguments

class MyCar{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`)
    }
}

const myCar1 = new MyCar("Mustang", 2023, "red");
const myCar2 = new MyCar("Corvette", 2024, "blue");
const myCar3 = new MyCar("Lambo", 2022, "yellow");
const myCar4 = new MyCar("Ferrari", 2025, "white");

displayInfo(myCar1);

function displayInfo(myCar){
    console.log(myCar.model);
    console.log(myCar.year);
    console.log(myCar.color);
}

changeColor(myCar2, "gold");
displayInfo(myCar2);
displayInfo(myCar3);

function changeColor(car, color){
    car.color = color;
}


// ARRAY of objects

const myCars = [myCar1, myCar2, myCar3, myCar4];

console.log(myCars[0].model);
console.log(myCars[1].model);
console.log(myCars[2].model);

myCars[0].drive();
myCars[1].drive();
myCars[2].drive();

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

startRace(myCars);


// ANONYMOUS objects -> without name

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Dimonds");
let card4 = new Card("A", "Clubs");

let card5 = new Card("2", "Hearts");
let card6 = new Card("2", "Spades");
let card7 = new Card("2", "Dimonds");
let card8 = new Card("2", "Clubs");

let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

console.log(card1.value + card1.suit);
console.log(cards[0].value + cards[0].suit);

let myCards = [
    new Card("A", "Hearts"),
    new Card("A", "Spades"),
    new Card("A", "Dimonds"),
    new Card("A", "Clubs"),

    new Card("2", "Hearts"),
    new Card("2", "Spades"),
    new Card("2", "Dimonds"),
    new Card("2", "Clubs")]

console.log(myCards[0].value + " - " + myCards[0].suit);

myCards.forEach(card => console.log(`${card.value} ${card.suit}`));