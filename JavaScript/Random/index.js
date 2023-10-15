// Random number between 0 and 1
let x = Math.random();

// Random number between 0 and 5
x = Math.random() * 6;

// Round down + between 0 and 6
x = Math.floor(Math.random() * 6) + 1;

let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;

// console.log(x);
// console.log(y);
// console.log(z);

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

}