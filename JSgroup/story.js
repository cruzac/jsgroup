var page = 0;
var story = 0;

var stories = [
	myWay = [
		"&quot;My Way&quot; is a song popularized by Frank Sinatra. Its lyrics were written by Paul Anka and set to music based on the French song &quot;Comme d&apos;habitude&quot; composed in 1967 by Claude Francis and Jacques Revaux, with lyrics by Claude Francis and Gilles Thibault. Comme d&apos;habitude had in turn originally been written in English, titled &quot;For Me&quot;. Anka&apos;s English lyrics are unrelated to the original French song or the earlier English version.", "&quot;My Way&quot; is often quoted as the most covered song in history. The song was released on 1969,recorded December 30, 1968. However, the most controversial video attributed to Marilyn Manson is named Groupie. The legend of the tape says that it was recorded by the band during their Antichrist Superstar Tour (1996-1998) and shows a fan being tortured by Marilyn and Twiggy (Jeordie White).", "According to the story, the footage was captured on a handheld camcorder and shows Manson ordering the groupie to perform acts. The film starts out with Marilyn informing his guests that the girl will be taped.When she arrives,the party takes a weird turn. In Philippines, it is popularly sang by adult Filipinos in parties they called Inuman (Drinking Spree), which makes the party more enjoying and interesting. They often use karaoke in those inuman.", 
		"This song is considered the most dangerous of all in the Philippines. When the party is held (more often at Bars and/or Restaurants), the singer, while singing or after he finishes, will suddenly be killed. So that&apos;s the very big question for Filipinos. <strong>Information</strong> The lyrics seemed simple and not paranormal. However, the first stanza makes me feel horrified. Well, it says: And now, the end is here.", 
		"It&apos;s telling you that the end (of the one singing the song) is finally here (perhaps, to kill you). Could it be the reason why it was considered a curse? Or just misunderstanding it. Well, for me the killing is just coincidence. Actually the song killed at least six people. It&apos;ll be considered paranormal if those people were killed by an accident or just died without any reason. However, they are all killed by gunshot, struggling from a fight against someone."
	],
	curse = [
		"During the Spanish times, there was once a Spanish lady here in the Philippines. She was walking somewhere when she met an old filipino, carrying a heavy baggage on his back. Then he suddenly fell on the road because of exhaustion. Since Filipinos were meanly treated as slave workers, she kicked his body to get him out of her way. Then, when the Spanish lady had passed through, th old man just stared at her, as if waiting for her to leave. Then, the old man threw a curse - The Curse of One&apos;s Death.",
		"The day after the incident, she heard the old man she saw yesterday had passed away. She was surprised and quite shaken by that news, so she immediately told the whole story to a certain friend. The next day, her friend died a mysterious death, with no trace of illness or accident. This time, the Spanish lady became even more frightened. To have someone console her, she again told somebody, this time, a bishop, about the old man she met by the road. Subsequently the bishop died, and just like what had happened to her friend, ",
		"there was no evidence of sickness or accident too. This made the Spanish lady terriby worried. It finally occurred to her that a curse must be the cause surrounding those untimely and unexplainable deaths. She then consulted an albularyo. She told everything that happened, from the old man to the death of the Bishop. Then the witch doctor advised to her that the only way to break the curse was to tell the story to the one she loved the most. And so she did follow what the witch doctor had said. Unfortunately, it was the Spanish lady who soon died.",
		"And so the story of the Spanish lady was passed on to everyone; from one place to another. Then, there was a Filipino who soon heard about that story. While he was about to sleep one night , suddenly, an image of a woman appeared in front of him. It was the Spanish lady, she was saying something in Spanish. And the Filipino just nodded, although wondering what the lady had said to him. Then she disappeared, like a mist in the night. &quot;WHOEVER WILL HEAR OR READ THIS STORY WILL SEE THE SPANISH LADY IN THE MIDDLE OF THE NIGHT.&quot;",
	]
]; 


function pickStory(_story) {
	story = _story;
	page = 0;
	start();
}

function start() {
	document.getElementById("story").innerHTML = "<p>" +stories[story][0] + "</p><button onclick=next()>Next</button>";
}

function next() {
	console.log(page);
	if (page < myWay.length - 1 || page < curse.length - 1) {
		document.getElementById("story").innerHTML = "<p>" + stories[story][++page]  + "</p><button onclick=next()>Next</button> <button onclick=previous()>Previous</button>";
	}
	if (page == myWay.length - 1 || page == curse.length - 1) {
		document.getElementById("story").innerHTML = "<p>" + stories[story][page] + "</p><button onclick=end()>End</button>";
	}
}

function previous() {
	if (page > 0) {
		document.getElementById("story").innerHTML = "<p>" + stories[story][--page]  + "</p><button onclick=next()>Next</button> <button onclick=previous()>Previous</button>";
	}
	if (page == 0) {
		document.getElementById("story").innerHTML = "<p>" + stories[story][page]  + "</p><button onclick=next()>Next</button>";
	}
}

function end() {
	document.getElementById("story").innerHTML = "<button onclick=pickStory(0)>My Way's Curse</button><br><br><button onclick=pickStory(1)>The Curse of One's Death</button><br><br><a href='myway.html'><button style='font-size:50px;'>Bonus: Sing-along</button></a>";
	
}