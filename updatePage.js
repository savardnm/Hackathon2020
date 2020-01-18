var TABLE_ROWS = 5;

function fillTable() {
	var tomorrow = new Date();
	var roomsOpen = getAllRoomsOpenLength(new Date(), tomorrow.setDate(tomorrow.getDate() + 1));
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
