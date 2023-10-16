console.dir(window);

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.outerWidth);
console.log(window.outerHeight);

console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);
// window.location.href = "https://www.google.com.vn/"
console.log(window.location.hostname);
console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");

// myButton.addEventListener("click", () => window.open("https://www.google.com.vn/"));
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());

// window.alert("hello!")
// window.confirm("Press OK to continue");
let age = window.prompt("Enter age");
if(age < 18){
    window.alert("You must 18+ to vist this site!");
    window.close();
}