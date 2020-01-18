var TABLE_ROWS = 5;

function fillTable() {
	var roomsOpen = getAllRoomsOpenLength(new Date(), new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
	var table = []
	
	var count = 0;
	for (var key in Object.keys(roomsOpen)) {
		if (roomsOpen[key] != 0) {
			if (count % 5 == 0) {
				table.push({key:roomsOpen[key]});
			} else {
				table[Math.floor(count/TABLE_ROWS)][key] = roomsOpen[key];
			}
			count++;
		}
	}
	return table;
}

var TABLE_PAGES = fillTable();
var CURRENT_PAGE = 0;

function updateListing() {
	var page = TABLE_PAGES[CURRENT_PAGE];
	var count = 1;
	for (var key in Object.keys(page)) {
		document.getElementById("roomR" + count).innerHTML = rooms[key];
		document.getElementById("hoursR" + count).innerHTML = page[key];
		count++;
	}
}
