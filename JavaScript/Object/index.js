const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function(){
        console.log("You drive the car");
    },

    brake: function(){
        console.log("You stop on the brakes");
    }
}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function(){
        console.log("You drive the car");
    },

    brake: function(){
        console.log("You stop on the brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();


// THIS keyword

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function(){
        console.log(`You drive the ${this.model} car`);
        // console.log(`You drive the ${car.model} car`);
    },

    brake: function(){
        console.log(`You stop on the brakes`);
    }
}

car.drive();


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