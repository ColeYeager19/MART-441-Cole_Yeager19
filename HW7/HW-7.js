// JavaScript Document

var myViewFinderArray = new Array();

class ViewFinder
{
    constructor( title, author, year, description, image )
    {
        this.title = title;
		this.author = author;
		this.year = year;
	    this.description = description;
	    this.image = image;
	   
    }

    toString()
    {
    	let str;
		str = " Title: " + this.title  + " Author: " + this.author
		+ " Year: " + this.year + " Description: " + this.description + this.image;
		return str;
		
    }

    get theTitle()
    {
        return this.title;
		return this.author;
    }
	

	
}
	

function initializeArray()
{
    var myViewFinder = new ViewFinder("The Burning Monk"); 
    var myViewFinder1 = new ViewFinder("The Black Panthers hold a demonstration");
	var myViewFinder2 = new ViewFinder("Alternate View Of Tiananmen Square");
	var myViewFinder3 = new ViewFinder("Young protestors against the war");
	var myViewFinder4 = new ViewFinder("Communist leader in American grocery store");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}


function accessInformation()
{

    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}