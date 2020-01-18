var TABLE_ROWS = 5;
var CURRENT_PAGE = 0;

var roomsOpen = getAllRoomsOpenLength(new Date(), new Date(new Date().getTime() + 24 * 60 * 60 * 1000));

function checkAllResponsesIn(responseCount) {
	if (responseCount == Object.keys(rooms).length) {
		var loadSymbol = document.getElementById("loadingSymbol");
		loadSymbol.parentNode.removeChild(loadSymbol);
		roomsOpen = fillTable();
		updateListing();
	}
}

function fillTable() {
	var table = []
	
	var count = 0;
	for (var key in roomsOpen) {
		if (roomsOpen[key] != 0) {
			if (count % 5 == 0) {
				var page = {};
				page[key] = roomsOpen[key];
				table.push(page);
			} else {
				table[Math.floor(count/TABLE_ROWS)][key] = roomsOpen[key];
			}
			count++;
		}
	}
	return table;
}

function updateListing() {
	var page = roomsOpen[CURRENT_PAGE];
	var count = 1;
	for (var key in page) {
		document.getElementById("roomR" + count).innerHTML = rooms[key];
		document.getElementById("hoursR" + count).innerHTML = page[key] + " hours";
		count++;
	}
	if (roomsOpen.length > 1) {
		document.getElementById('rButton').disabled = false;
	}
}
