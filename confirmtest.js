'use strict';


function fieldClick(){
	Keyboard.hide();
	setTimeout(Keyboard.hide, 1);
	setTimeout(Keyboard.hide, 10);
}

function init() {
  document.getElementById('busID').onfocus = fieldClick;
  document.getElementById('busOff').onfocus = fieldClick;
  document.getElementById('busOn').onfocus = fieldClick;
  document.getElementById('busPOB').onfocus = fieldClick;
  document.getElementById('busPLB').onfocus = fieldClick;
}

// Wait for device API libraries to load
document.addEventListener("deviceready", init, false);


