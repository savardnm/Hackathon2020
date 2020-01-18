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
	var today = new Date();
	today.setMinutes(0);
	today.setSeconds(0);
	today.setMilliseconds(0);
	window.sessionStorage.setItem("runningDate", JSON.stringify(today));
	window.location.href = "availableRooms.html";
}

function clickStudyLater() {
	var date = new Date(document.getElementById("daySelect").value);
	var hour = parseInt(document.getElementById("hourSelect").value);
	window.sessionStorage.setItem("runningDate", JSON.stringify(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, hour, 0, 0)));
	window.location.href = "availableRooms.html";
}
