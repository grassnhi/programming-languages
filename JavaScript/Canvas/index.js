let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.beginPath();

context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);

context.moveTo(500, 0);
context.lineTo(250, 250);

context.strokeStyle = "purple";
context.lineWidth = 10;
context.stroke();


// DRAW A TRIANGLE


context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();

context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.moveTo(500, 0);

context.stroke();
context.fill();


// DRAW A RECTANGLE


context.fillStyle = "yellow";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);


// DRAW A CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise)

context.fillStyle = "lightblue";
context.strokeStyle = "dark";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 100, 0, 2 * Math.PI);
context.stroke();
context.fill();


// DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("You Win", canvas.width / 2, canvas.height / 2);