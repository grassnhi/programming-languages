// AND OR
let temp = 15;

if(temp > 0 && temp < 30){
    console.log("The weather is good.");
}else{
    console.log("The weather is bad.");
}

if(temp <= 0 || temp >= 30){
    console.log("The weather is bad.");
}else{
    console.log("The weather is good.");
}

let sunny = true;

if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is good.");
}else{
    console.log("The weather is bad.");
}

// NOT
if(!(temp > 0)){
    console.log("It's cold outside.");
}else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside.")
}else{
    console.log("It's sunny outside.")
}