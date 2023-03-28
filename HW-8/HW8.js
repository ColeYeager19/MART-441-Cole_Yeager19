// JavaScript Document


        $(function () {


        });
        $(document).ready(function () {
			
			$("div1").toggle();
			$("div2").toggle();
			$("button1").toggle();
			$("button2").toggle();
			$("h2").toggle();
			$("h3").toggle();
			initializeRect();
			
			
            $("button").click(function () {
				
				$("div").toggle();
				$("div1").toggle();
				$("h1").toggle();
				$("h2").toggle();
				$("button").toggle();
				$("button1").toggle();
				draw();
            });
			
			 $("button1").click(function () {
				 
				$("div1").toggle();
				$("div2").toggle();
				$("h2").toggle();
				$("h3").toggle();
				$("button1").toggle();
				$("button2").toggle();
				draw();
				
			});
			
			 $("button2").click(function () {
				
				$("div").toggle();
				$("div2").toggle();
				$("h3").toggle();
				$("h1").toggle();
				$("button2").toggle();
				$("button").toggle();
				$("drawTheThing").fadeOut();
			});
			
			
			
        });

var x;
var drawing;
var con;

function drawTheThing() {
	con.clearRect(0,0,drawing.width, drawing.height)
    x += 1;
	con.fillRect(x, 10, 180, 80);
}


function initializeRect() {
	drawing = document.getElementById("drawing");
	con = drawing.getContext("2d");
}

 function draw(){
 con.fillStyle = "teal";
 x = 10;
 for (var i = 0; i < 1000; i++) {
	 setTimeout(drawTheThing, 1000);
 }

 } 
