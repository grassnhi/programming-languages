// Show a window to get input
let username = window.prompt("What 's your name?");
// Print to console
console.log(username)


// Print to page
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);

    document.getElementById("myLabel").innerHTML = "Hello " + username;
}