// Une fois la fen�tre du navigateur charg�e, initialise PhoneGap
window.addEventListener('load', function(){
	document.addEventListener("deviceready", onDeviceReady, false);
}, false);

// The watch id references the current `watchHeading`
var watchID = null;

// Cette m�thode est appel�e une fois que PhoneGap est charg�
function onDeviceReady() {
	var btnLecture = $('#btnLecture');
	btnLecture.click(function(){
		alert('click');
		navigator.compass.getCurrentHeading (onGetCurrentHeadingSuccess, onGetCurrentHeadingError);	
	});    	

	var btnDemarreWatch = $('#btnDemarreWatch');
	btnDemarreWatch.click(function(){
		watchID = navigator.compass.watchHeading (onWatchHeadingSuccess, onWatchHeadingError, {frequency: 3000});
	});
	
	var btnArreteWatch = $('#btnArreteWatch');
	btnArreteWatch.click(function(){
		if (watchID) {
			navigator.compass.clearWatch (watchID);
			watchID = null;
		}
	});
}

function onGetCurrentHeadingSuccess(heading) {
	alert('heading recu');
	$('#heading').html (heading.magneticHeading);
}

function onGetCurrentHeadingError(error) {
	alert ('Erreur: ' + error.code);
}

function onWatchHeadingSuccess(heading) {
	$('#heading').html (heading.magneticHeading);
}    

function onWatchHeadingError(error) {
	alert ('Erreur: ' + error.code);
}
