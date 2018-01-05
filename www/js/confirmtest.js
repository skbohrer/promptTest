'use strict';


function fieldClick(){
	Keyboard.hide();
	setTimeout(Keyboard.hide, 1);
	setTimeout(Keyboard.hide, 10);
}

function init() {
	FastClick.attach(document.body);
  	document.getElementById('busID').onfocus = fieldClick;
  	document.getElementById('busOff').onfocus = fieldClick;
 	  document.getElementById('busOn').onfocus = fieldClick;
  	document.getElementById('busPOB').onfocus = fieldClick;
  	document.getElementById('busPLB').onfocus = fieldClick;

  	document.getElementById('busID').onclick = fieldClick;
  	document.getElementById('busOff').onclick = fieldClick;
 	  document.getElementById('busOn').onclick = fieldClick;
  	document.getElementById('busPOB').onclick = fieldClick;
  	document.getElementById('busPLB').onclick = fieldClick;
}




// Wait for device API libraries to load
document.addEventListener("deviceready", init, false);


