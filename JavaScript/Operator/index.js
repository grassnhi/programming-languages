// Ternary operator
// condition ? exprIfTrue : exprIfFalse

let adult = checkAge(21);

console.log(adult);

function checkAge(age){
    // if(age >= 18){
    //     return true;
    // }else{
    //     return false;
    // }
    return age >= 18 ? true : false;
}

function checkWinner(win){
    win ? console.log('You win!') : console.log('You lose!');
}

checkWinner(false);


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