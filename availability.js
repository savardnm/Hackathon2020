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
