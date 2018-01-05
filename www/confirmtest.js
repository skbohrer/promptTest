'use strict';


function fieldClick(){
	Keyboard.hide();
	setTimeout(Keyboard.hide, 1);
	setTimeout(Keyboard.hide, 10);
}

function init() {
	FastClick.attach(document.body);
  	document.getElementById('busID').onclick = fieldClick;
  	document.getElementById('busOff').onclick = fieldClick;
 	document.getElementById('busOn').onclick = fieldClick;
  	document.getElementById('busPOB').onclick = fieldClick;
  	document.getElementById('busPLB').onclick = fieldClick;
}

// Wait for device API libraries to load
document.addEventListener("deviceready", init, false);


