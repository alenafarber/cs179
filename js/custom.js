// THIS CODE IS FOR THE EMOJI POPUPS

function catherine(){
	document.getElementById("send").innerHTML = "<p>Send <strong>Catherine</strong> an emoji!</p>";
}

function alena(){
	document.getElementById("send").innerHTML = "<p>Send <strong>Alena</strong> an emoji!</p>";
}

function catherine2(){
	document.getElementById("send2").innerHTML = "<p>Send <strong>Catherine</strong> an emoji!</p>";
}

function alena2(){
	document.getElementById("send2").innerHTML = "<p>Send <strong>Alena</strong> an emoji!</p>";
}

function catherine3(){
	document.getElementById("send3").innerHTML = "<p>Send <strong>Catherine</strong> an emoji!</p>";
}

function alena3(){
	document.getElementById("send3").innerHTML = "<p>Send <strong>Kavya</strong> an emoji!</p>";
}


// THIS CODE FOR FLAVOR TEXT ANIMATION

var changeText = function(textID) {
	counters[textID]++
	var textList = texts[textID];
	var newtext = textList[counters[textID] % textList.length];
	document.getElementById(textID).innerHTML = newtext;
}

var texts = {runText: ["Wow! You just zoomed by all the traffic in Times Square!", 
						"Alena just sent you a thumbs up!",
						"You just passed the Empire State Building. Over halfway there!", 
						"Catherine just sent you a heart!",
						"The birds are chirping in Washington Square Park. Here comes the home stretch!"], 
			strengthText: ["You've lifted the weight of the BMW's eight-cylinder engine already! Keep going!", 
							"Catherine just sent you a heart!",
							"Put some more elbow grease into it! You're over halfway there.", 
							"Alena just sent you a thumbs up!",
							"Wow - the BMW's beginning to come off the ground!"], 
			everestText: ["Tourists at the base of the mountain watch in awe as you embark on your climb!", 
							"Alena just sent you a thumbs up!",
							"You narrowly avoid a small avalanche by deftly clambering onto a nearby glacier. Whew! Halfway to the peak.", 
							"Catherine just sent you a heart!",
							"The summit is within view!"],
			runSolo: ["Wow! You just zoomed by all the traffic in Times Square!", 
						"You just passed the Empire State Building. Over halfway there!", 
						"The birds are chirping in Washington Square Park. Here comes the home stretch!"], 
			strengthSolo: ["You've lifted the weight of the BMW’s eight-cylinder engine already! Keep going!", 
							"Put some more elbow grease into it! You're over halfway there.", 
							"Wow - the BMW's beginning to come off the ground!"], 
			everestSolo: ["Tourists at the base of the mountain watch in awe as you embark on your climb!", 
							"You narrowly avoid a small avalanche by deftly clambering onto a nearby glacier. Whew! Halfway to the peak.", 
							"The summit is within view!"]};

var counters = {runText: 0, 
			strengthText: 0, 
			everestText: 0,
			runSolo: 0, 
			strengthSolo: 0, 
			everestSolo: 0};




// BELOW THIS POINT IS CODE FOR PROGRESS SCREEN ANIMATION


// below code is for the RUNNING progress screen

// i could have written it to use the same framework
// as the other 2 progress screens, but those are
// more complicated because of the checkboxes and
// the multi-step workouts, so i chose to write a separate
// frame function for the run screen because it is much simpler

var run = function(pageID) {

	var pic = document.getElementById(pageID).getElementsByClassName('me')[0];
	var text = document.getElementById(pageID).getElementsByClassName('prog-text')[0];
	var miles = document.getElementById(pageID).getElementsByClassName('miles-text')[0];

	var left = 0;

	function frame() {
		left++  // update parameters 
		
		pic.style.left = left + '%'; // show frame
		text.innerHTML = Math.round(left/96 * 100);
		miles.innerHTML =  (6 - (left / 96 * 6)).toFixed(1);

		if (left == 96)  {// check finish condition
			clearInterval(runner);
			window.location.href = "#complete";
		}
	}

	var runner = setInterval(frame, 20); // draw every 20ms
}



// the below code is for the strength and everest challenges

// because both progress screens are based on checkboxes,
// this code is written to be fairly general and take a number
// of arguments which are tied to the page IDs
// that way, the code works equally well for each of the 2 pages

// two variable objects to store animation values for each of the two pages.
var target = {progstrength: 0, progeverest: 0, progstrengthsolo: 0, progeverestsolo: 0};
var locs = {progstrength: 0, progeverest: 0, progstrengthsolo: 0, progeverestsolo: 0};

// determines if box was checked or unchecked, and adjusts animation accordingly
var boxMove = function(box, total, pageID) {
	if (box.checked) {
		target[pageID] += 100 / total;
		move(Math.round(target[pageID]), pageID);
		// alert("checked " + Math.round(strength));
	} else {
		target[pageID] -= 100 / total;
		move(Math.round(target[pageID]), pageID);
		// alert("unchecked " + Math.round(strength));
	}
};

// the actual animation function
var move = function(num, pageID) {

	var loc = locs[pageID];

	function frame() {
		if (num > loc) {
			loc++  // update parameters 
		} else {
			loc--
		}
		
		// moves the "me" icon and updates the % completion number
		document.getElementById(pageID).getElementsByClassName('me')[0].style.left = Math.round(loc / 100 * 90) + '%';
		document.getElementById(pageID).getElementsByClassName('prog-text')[0].innerHTML = Math.round(loc);
		locs[pageID] = loc;

		// stops animating when the icon has reached the right amount of progress
		if (loc == num)  {// check finish condition
			clearInterval(mover);
		}

		// if challenge is 100% complete, go to complete page!
		if (loc == 100) {
				window.location.href = "#complete";
		};
	}

	var mover = setInterval(frame, 15); // draw every 20ms
}