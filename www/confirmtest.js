'use strict';


function fieldClick(){
	Keyboard.hide();
	setTimeout(Keyboard.hide, 1);
	setTimeout(Keyboard.hide, 10);
}

function init() {
	FastClick.attach(document.body);
  	document.getElementById('busID').onfocusin = fieldClick;
  	document.getElementById('busOff').onfocusin = fieldClick;
 	document.getElementById('busOn').onfocusin = fieldClick;
  	document.getElementById('busPOB').onfocusin = fieldClick;
  	document.getElementById('busPLB').onfocusin = fieldClick;

  	document.getElementById('busID').onselect = fieldClick;
  	document.getElementById('busOff').onselect = fieldClick;
 	document.getElementById('busOn').onselect = fieldClick;
  	document.getElementById('busPOB').onselect = fieldClick;
  	document.getElementById('busPLB').onselect = fieldClick;

}




// Wait for device API libraries to load
document.addEventListener("deviceready", init, false);


