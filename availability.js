function rButtonClicked() {
	CURRENT_PAGE++;
	updateListing();
	if (CURRENT_PAGE + 1 == roomsOpen.length) {
		document.getElementById('rButton').disabled = true;
	} else if (CURRENT_PAGE == 1) {
		document.getElementById('lButton').disabled = false;
	}
}

function lButtonClicked() {
	CURRENT_PAGE--;
	updateListing();
	if (CURRENT_PAGE == 0) {
		document.getElementById('lButton').disabled = true;
	} else if (CURRENT_PAGE == roomsOpen.length - 2) {
		document.getElementById('rButton').disabled = false;
	}
}

function clickStudyNow() {
	runningDate = new Date();
	window.location.href = "availableRooms.html";
}

function clickStudyLater() {
	var date = document.getElementById("daySelect").value;
	var hour = document.getElementById("hourSelect").value;
	runningDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, 0, 0);
	window.location.href = "availableRooms.html";
}
