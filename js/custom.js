// below code is for the RUNNING progress screen

// i could have written it to use the same framework
// as the other 2 progress screens, but those are
// more complicated because of the checkboxes and
// the multi-step workouts, so i chose to write a separate
// frame function for the run screen because it is much simpler

function run() {

	var pic = $('#run-me')[0];
	var text = $('#run-prog')[0];
	var left = 0;

	function frame() {
		left++  // update parameters 
		
		pic.style.left = left + '%'; // show frame
		text.innerHTML = Math.round(left/96 * 100);

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
var target = {progstrength: 0, progeverest: 0};
var locs = {progstrength: 0, progeverest: 0};

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