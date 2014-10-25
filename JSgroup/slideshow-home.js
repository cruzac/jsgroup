// slideshow

var imageElement = 0; 
var image = new Array();   

image[0] = "MC/c9.jpg"; 
image[1] = "MC/c2.jpg"; 
image[2] = "MC/c3.jpg"; 
image[3] = "MC/c4.jpg";
image[4] = "MC/c1.jpg"; 
image[5] = "MC/c5.jpg"; 
image[6] = "MC/c6.jpg"; 
image[7] = "MC/c7.jpg"; 
image[8] = "MC/c8.jpg"; 
image[9] = "MC/c11.png"; 
image[10] = "MC/c12.jpg"; 
image[11] = "MC/c10.png"; 

var imageCaption = image.length-1;    
var caption = new Array();   

caption[0] = "<div class='titleM'>" + "KAPRE" + "</div>" + "<br/>" + "Kapre is a Philippine mythical creature that could be characterized as a tree demon, but with more human characteristics. Kapres are normally described as smoking a big ganjapipe, whose strong smell would attract human attention. " + "<br />" + "<br />" + "<a href='kapre1.html'>" + "READ MORE" + "</a>";

caption[1] = "<div class='titleM'>" + "BAMPIRA" + "</div>" + "<br/>" + "The flying aswang is engaged in vampiric activities at night, always returning home to resume her normal life before dawn. Some women have an ointment that they rub on their body prior to their nocturnal activities." + "<br />" + "<br />" + "<a href='bampira.html'>" + "READ MORE" + "</a>"; 

caption[2] = "<div class='titleM'>" + "ASWANG" + "</div>" + "<br/>" + "Shapeshifting demon, humanlike by day but transform into different monstrous form at night. By day, they look like a beautiful, silent maidens dwelling in a simple nipa hut, but by night, they become a terrible fiend that feeds to human flesh and blood." + "<br />" + "<br />" + "<a href='aswang.html'>" + "READ MORE" + "</a>";   

caption[3] = "<div class='titleM'>" + "NUNO SA PUNSO" + "</div>" + "<br/>" + "Angry male goblins inflicting harsh punishments to those who offend them. People who are punished are called Namatanda, and must be brought to an Albularyo (Shaman), to heal the punishment. They mostly live in an anthill as what Filipino called as Punso." + "<br />" + "<br />" + "<a href='nuno.html'>" + "READ MORE" + "</a>";

caption[4] = "<div class='titleM'>" + "MANGKUKULAM" + "</div>" + "<br/>" + "Mangkukulam are witches that cast evil spells to cause harm to human and/or plagues. They use a doll (Booddoo Doll) with a hair strand on it then cast spells to for a curse. The mangkukulam recites spells and mixes potions." + "<br />" + "<br />" + "<a href='mangkukulam.html'>" + "READ MORE" + "</a>"; 

caption[5] = "<div class='titleM'>" + "WAKWAK" + "</div>" + "<br/>" + "The Wakwak is a vampiric, bird-like creature in Philippine mythology. It is said to snatch humans at night as prey, similar to the Manananggal and the Ekek in rural areas of the Philippines, due to its ability to fly." + "<br />" + "<br />" + "<a href='wakwak.html'>" + "READ MORE" + "</a>";

caption[6] = "<div class='titleM'>" + "ENGKANTO" + "</div>" + "<br/>" + "Engkanto are environmental spirits that have the ability to appear in human form. They are also characterized as forest spirits or elves. Belief in their existence has likely existed for centuries, and continues to this day." + "<br />" + "<br />" + "<a href='engkanto.html'>" + "READ MORE" + "</a>";

caption[7] = "<div class='titleM'>" + "MAMBABARANG" + "</div>" + "<br/>" + "Mambabarang (summoner) is a witch who uses insects and spirits to enter the body of any person they hate. Mambabarangs are ordinary human beings with black magic who torture and later kill their victims by infesting their bodies with insects." + "<br />" + "<br />" + "<a href='mambabarang.html'>" + "READ MORE" + "</a>";

caption[8] = "<div class='titleM'>" + "MANANANGGAL" + "</div>" + "<br/>" + "Manananggal is an aswang that can fly after separating itself from the lower half of its body. It eats babies by means of passing their long tongue through a small hole from the roof of a house." + "<br />" + "<br />" + "<a href='manananggal.html'>" + "READ MORE" + "</a>";

caption[9] = "<div class='titleM'>" + "SIYOKOY" + "</div>" + "<br/>" + "Siyokoy are mermen, sea creatures that have a human form and scaled bodies. The lower extremities of a Philippine merman can either be a fishtail or scaled legs and webbed feet." + "<br />" + "<br />" + "<a href='siyokoy.html'>" + "READ MORE" + "</a>";

caption[10] = "<div class='titleM'>" + "TIKBALANG" + "</div>" + "<br/>" + "Tikbalang or tigbalang (demon horse) is a half-man and half-horse creature. It has a horse's head, the body of a human but with the feet of the horse. It travels at night to rape female mortals. The raped women will then give birth to more tikbalang." + "<br />" + "<br />" + "<a href='tikbalang.html'>" + "READ MORE" + "</a>";

caption[11] = "<div class='titleM'>" + "TIYANAK" + "</div>" + "<br/>" + "Tiyanak or impakto are babies who died before receiving baptism rites. After death, they go to a place known as Limbo, a chamber of Hell which unbaptized dead people fall into, and are transformed into evil spirits. " + "<br />" + "<br />" + "<a href='tiyanak.html'>" + "READ MORE" + "</a>";

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