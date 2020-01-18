function requestBookings(id, startDate, endDate) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			resolve(this.responseXML);
		};
		var url = live_base_url + id + live_start_time_url + startDate + live_end_time_url + endDate + live_modifiers_url;
		xhr.onerror = reject;
		xhr.open('Get', url);
		xhr.send();
	});
}

function getAllRoomsOpenLength(startDate, endDate) {
	var roomHours = {};
	startHour = fillZeroesString(startDate.getHours());
	startDate = convertToString(startDate);
	endDate = convertToString(endDate);

	Object.keys(rooms).forEach(function(key) {
		requestBookings(key, startDate, endDate)
			.then(function(result) {
				roomHours[key] = processResult(result, startHour, key);	
			})
			.catch(function() {
				roomHours[key] = 0;
			});
	});
	return roomHours;
}

function processResult(xml, startHour, id) {
	var reservations = xml.getElementsByTagName("r25:space_reservation");
	if (reservations.length == 1) {
		return 24;
	}
	var bookedTime = xml.getElementByTagName("r25:reservation_start_dt")[0].childnodes[0].nodeValue;
	var bookedTime = parseInt(bookedTime.substr(bookedTime.indexOf("T") + 1, 2));
	if (bookedTime < startHour) {
		return (24 - startHour) + bookedTime;
	}
	return bookedTime - currentHour;
}

function convertToString(date) {
	var hour = fillZeroesString(date.getHours());
	var month = fillZeroesString(date.getMonth() + 1);
	var day = fillZeroesString(date.getDate());
	return date.getFullYear().toString() + "-" + month + "-" + day + "T" + hour + ":00:00";
}

function fillZeroesString(date) {
	if (date < 10) {
		return "0" + date.toString();
	}
	return date.toString();
}
