var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var collArray = [];
var lives = 3;
var points = 0;
$(document).ready(function(){
    
    setup();  
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("HW12Info.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
	
	$.getJSON("HW12Info2.json", function(data) {
        for(var i = 0; i < data.collectible.length; i++)
        {
            collArray.push(new Square(data.collectible[i].x,data.collectible[i].y, data.collectible[i].h, data.collectible[i].w, data.collectible[i].color));
        }
        drawColl();
    });
    
}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
	
	var collTest = false;
	for(var i = 0; i < collArray.length; i++)
	{
		collTest = hasCollided(square1,collArray[i]);
		if(collTest == true)
		{
			break;
		}
	}
	if(collTest)
	{
		points++;
	}
	
    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
        //console.log(test2);
    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
    drawSquare();
	drawColl();
    
}

function moveUp()
{
    square1.y-=5;
}
function moveDown()
{
    square1.y+=5;
}
function moveRight()
{
    square1.x+=5;
}
function moveLeft()
{
    square1.x-=5;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor; //mainColor
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);  
	ctx.fillText("Points: " + points, 10, 80);	

}

function drawColl()
{
    for(var i = 0; i < collArray.length; i++)
    {
        ctx.fillStyle = collArray[i].mainColor;
        ctx.fillRect(collArray[i].x, collArray[i].y, collArray[i].width, collArray[i].height);
    }

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}// JavaScript Document
