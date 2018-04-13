setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

if (hours >= 24){
hours = -24;
}
    
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds;
    var clock = document.getElementById("clock");
    clock.innerText = clockTime;
 }, 1000);




///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** varriable cercle ****/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dx = 7;
var dy = -7;
var x = canvas.width/2;
var y = canvas.height -30;
var ballRadius = 10;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** varriable paddle ****/

var paddleHeight = 10;
var paddleWidth = 100; 
var paddleX = (canvas.width-paddleWidth)/2;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** variable mouvement user ****/
var rightPressed = false;
var leftPressed = false;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** variable brick ****/

var brickRowCount = 4;
var brickColumnCount = 13;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** variable score ****/

var score = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** fonction mouvement with mouse ****/

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** fonction score ****/ 

function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "red";
	ctx.fillText("Score:"+score, 8, 20); 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** tableau brick ****/

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}


function drawBricks(){
var brick =[];
for (c = 0; c < brickColumnCount; c++) {
	for (r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** Detection de colision ****/

function collisionDetection() {
	for (c = 0; c < brickColumnCount; c++) {
		for (r = 0; r < brickRowCount; r++) {
			var b = bricks[c][r];
			if (b.status == 1 ) {
				if(x > b.x && x < b.x + brickWidth && y < b.y + brickHeight){
					dy = -dy;
					b.status = 0;
					score++;
					if (score == brickRowCount*brickColumnCount) {
						alert("Ta gagner le droit de rejouer!!");
						document.location.reload();
					}
				}
			}
		}
	}
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** fonction paddle et cercle plus proprieter ****/

function drawPaddle(){
    ctx.beginPath();
    ctx.rect (paddleX, canvas.height-paddleHeight , paddleWidth, paddleHeight)
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawBall(){
    if (start == true) {
    ctx.beginPath();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.arc(x,y,ballRadius,0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}else{
    return 0;
    }
}



function draw(){

	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	drawBall();
	drawPaddle();
	drawBricks();
	collisionDetection();
	drawScore();



	x += dx;
    y += dy;

if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy >canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        alert("REGARDE LA PUTAIN DE BALLE");
        document.location.reload();
    }
}

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}

	if(rightPressed && paddleX < canvas.width-paddleWidth){
		paddleX += 7;
	}

	else if(leftPressed && paddleX > 0){
		paddleX -= 7;
	}

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** mouvement paddle User ****/
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {

        if(e.keyCode == 13) {
        start = true;
    }
}
function keyUpHandler(e) {

        if(e.keyCode == 13) {
        start == false;
    }
}










var button = document.getElementById('enter')
    ,input = document.getElementById('userInput')
    ,ul = document.querySelector("ul")
     
    



















setInterval(draw, 10)