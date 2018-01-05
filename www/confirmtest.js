'use strict';


function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

function doBtnClick () {
	navigator.notification.prompt(
		'Please enter your name',  // message
		onPrompt,                  // callback to invoke
		'Registration',            // title
		['Ok','Exit'],             // buttonLabels
		'Jane Doe'                 // defaultText
	);
}
// Call on Android device ready event and also directly for PC testing. Thus
// init may be called twice
function init() {
  document.getElementById('showDialog').onclick = doBtnClick;
}

// Wait for device API libraries to load
document.addEventListener("deviceready", init, false);

init();

