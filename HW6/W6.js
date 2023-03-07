// JavaScript Document

function myFunction() {
	var firstname = document.getElementById("firstname").value;
	console.log(firstname);
}

function myFunction2() {
	var lastname = document.getElementById("lastname").value;
	console.log(lastname);
}
	
function myFunction3() {
	var age = document.getElementById("age").value;
	console.log(age);
}

function setInformation() {
	document.getElementById("info").innerHTML = firstname;
	document.getElementById("info2").innerHTML = lastname;
	document.getElementById("info3").innerHTML = age;
	document.getElementById("info4").innerHTML = attempts;
}

var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20","image21", "image22", "image23", "image24"];

var blankImagePath = "images/Blank.jpg";

var actualImages = new Array();
    
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src="Blank.jpg";
    }
    
}

function createRandomImageArray()
{

	var actualImagePath = ["MountainDog.jpg", "Husky.jpg", "BlackLab.jpg", "CockerSpaniel.jpg", "GermanShepard.jpg", "KingCharles.jpg", "GoldenRetriever.jpeg", "ChocolateLab.jpg", "Boz.jpg", "BorderCollie.jpg", "Akita.jpg", "Raccoon.jpg"];
	var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 
    while(actualImages.length < 24)
    {
       
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
         
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
          
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
	if (flipBack == "") {flipBack = actualImages[number];
						flipBackCounter = number;
						}
	else {if (flipBack != actualImages[number]){ 
												
												document.getElementById(imageTags[number]).src = "Blank.jpg";
												document.getElementById(imageTags[flipBackCounter]).src = "Blank.jpg";
												flipBack = "";
												flipBackCounter = 0;
												attempts += 1;
												}
else {flipBack = "";
flipBackCounter = 0;
attempts += 1;
cormatch += 1;
if(cormatch==12){window.location.href = "./JSON.html";}
	}
	}    
}


var flipBack = "";
var flipBackCounter = 0;


var attempts = 0;
var cormatch = 0;
