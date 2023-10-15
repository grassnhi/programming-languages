
document.getElementById("myButton").onclick = function(){
    const myCheckbox = document.getElementById("myCheckbox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckbox.checked){
        console.log("You are subscribed!");
    }else{
        console.log("You are not subscribed!");
    }

    if(visaBtn.checked){
        console.log("You are paying with a Visa");
    }else if(mastercardBtn.checked){
        console.log("You are paying with a Mastercard");
    }else if(paypalBtn.checked){
        console.log("You are paying with a Paypal");
    }
    else{
        console.log("You must select a payment type");
    }
}