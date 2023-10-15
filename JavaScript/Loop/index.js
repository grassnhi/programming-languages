// WHILE loop

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name:");
}

console.log("Hello", userName);

// while(1 == 1){
//     console.log("Help! I'M IN STUCK INFINITIVE LOOP!")
// }


// Do while

do{
    userName = window.prompt("Enter your name:");
}while(userName == "")  // do sth first the check condition


// FOR loop
for(let counter = 1; counter <= 10; counter++){
    console.log(counter);
}

for(let i = 10; i > 0; i -= 2){
    console.log(i);
}

console.log("Happy new year!!!");


// BREAK - CONTINUE

for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;  // break the whole for loop
    }
    console.log(i);
}

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;  // skip this loop, skip statement below of this round
    }
    console.log(i);
}


// NESTED Loop

for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

let symbol = window.prompt("Enter a symbol");
let rows = window.prompt("Enter number of rows:");
let columns = window.prompt("Enter number of columns:");

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}