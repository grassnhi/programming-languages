const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

deleteCookie("firstName");
deleteCookie("lastName");

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Nhi; expires=Sun, 1 January, 2025 12:00:00 UTC; path=/";
// document.cookie = "lastName=Grass; expires=Sun, 1 January, 2000 12:00:00 UTC; path=/";

// console.log(document.cookie);

function setCookie(name, value, dayToLive){
    const date = new Date();
    date.setTime(date.getTime() + dayToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

setCookie("firstName", "Nhi", 365);
setCookie("email", "Nhi@gmail.com", 365);

function deleteCookie(name){
    setCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

console.log(getCookie("firstName"));