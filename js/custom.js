$(function() {
	moveButton = $('.motion'); 

	for (var i = 0; i < moveButton.length; i++) {
		var button = moveButton[i];
		button.onclick = function() {move()};
	}


	function move() {

		var me = $('.me');
		var left = 0;

		function frame() {
			left++  // update parameters 
			
			for (var i = 0; i < me.length; i++) {
				var elem = me[i];
				elem.style.left = left + '%'; // show frame
			}

			if (left == 96)  {// check finish condition
				clearInterval(id);
				window.location.href = "#complete";
			}
		}

		var id = setInterval(frame, 20); // draw every 10ms
	}
});