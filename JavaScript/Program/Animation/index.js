const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200 || scaleX >= 2 || scaleY <= 0.1){
            clearInterval(timerId);
        }
        else{
            x += 1;
            y += 1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";

            degrees += 1;
            // myAnimation.style.transform = "rotateZ("+degrees+"deg)";
            // myAnimation.style.transform = "rotateY("+degrees+"deg)";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";

            scaleX += 0.01;
            scaleY -= 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}