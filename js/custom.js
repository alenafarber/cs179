$(function() {
	moveButton = $('#motion'); 
	moveButton[0].onclick=function() {move()};


	function move() {

		var me = $('#me');
		var elem = me[0];
		var left = 0;

		function frame() {
			left++  // update parameters 
			elem.style.left = left + '%'; // show frame
			if (left == 96)  {// check finish condition
				clearInterval(id);
				window.location.href = "#complete";
			}
		}

		var id = setInterval(frame, 20); // draw every 10ms
	}
});