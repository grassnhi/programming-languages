// If statement
let age = 21;

if(age >= 65){
    console.log("You are a senior citizen!");
}else if(age >= 18){
    console.log("You are an adult!");
}else if(age < 0){
    console.log("You have not born yet!");
}else{
    console.log("You are a child!");
}

let online = false;

if(online){
    console.log("You are online.");
}else{
    console.log("You are offline.");
}


// Switch

let grade = "A";

switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed ... barely");
        break;
    case "F":
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade!")
}