// slideshow

var imageElement = 0; 
var image = new Array();   

image[0] = "MC/c1.jpg"; 
image[1] = "MC/c2.jpg"; 
image[2] = "MC/c3.jpg";    
image[3] = "MC/c4.jpg";

var imageCaption = image.length-1;    
var caption = new Array();   

caption[0] = "<div class='titleM'>" + "MANGKUKULAM" + "</div>" + "<br/>" + "Mangkukulam are witches that cast evil spells to cause harm to human and/or plagues. They use a doll (Booddoo Doll) with a hair strand on it then cast spells to for a curse. The mangkukulam recites spells and mixes potions." + "<br />" + "<br />" + "<a href='mangkukulam.html'>" + "READ MORE" + "</a>"; 

caption[1] = "<div class='titleM'>" + "BAMPIRA" + "</div>" + "<br/>" + "The flying aswang is engaged in vampiric activities at night, always returning home to resume her normal life before dawn. Some women have an ointment that they rub on their body prior to their nocturnal activities." + "<br />" + "<br />" + "<a href='bampira.html'>" + "READ MORE" + "</a>"; 

caption[2] = "<div class='titleM'>" + "ASWANG" + "</div>" + "<br/>" + "Shapeshifting demon, humanlike by day but transform into different monstrous form at night. By day, they look like a beautiful, silent maidens dwelling in a simple nipa hut, but by night, they become a terrible fiend that feeds to human flesh and blood." + "<br />" + "<br />" + "<a href='aswang.html'>" + "READ MORE" + "</a>";   

caption[3] = "<div class='titleM'>" + "NUNO SA PUNSO" + "</div>" + "<br/>" + "Angry male goblins inflicting harsh punishments to those who offend them. People who are punished are called Namatanda, and must be brought to an Albularyo (Shaman), to heal the punishment. They mostly live in an anthill as what Filipino called as Punso." + "<br />" + "<br />" + "<a href='nuno.html'>" + "READ MORE" + "</a>";

function swapImage(){ 
	var element = document.getElementById("mydiv"); 
	element.innerHTML=caption[imageElement]; 

	var img = document.getElementById("slide"); 
	img.src= image[imageElement];  

	if(imageElement < imageCaption ) {
		imageElement++;
	} else  { 
		imageElement = 0; 
	} 

	setTimeout("swapImage()",10000);  
} 

function loadSlideshow(_load) { 
	var startLoad = window.onload; 

	if (typeof window.onload != 'function') { 
		window.onload = _load; 
	} else  { 
		window.onload = function() { 
			if (startLoad) { 
				startLoad(); 
			} 
				_load(); 
		} 
	} 
}  

	loadSlideshow(function() { 
		swapImage(); 
	});