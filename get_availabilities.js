function getAvailability(id, startTime, endTime, currentHour) {
	var xhr = new XMLHttpRequest();
	var url = live_base_url + id + live_start_time_url + startTime + live_end_time_url + endTime + live_modifiers_url; 
	
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onloadend = function () {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			return processResponse(xhr.responseXML, currentHour);
		}
	};
}

function processResponse(xml, currentHour) {
	var reservations = xml.getElementsByTagName("r25:space_reservation");
	if (reservations.length == 1) {
		return 24;
	}
	var bookedTime = xml.getElementsByTagName("r25:reservation_start_dt")[0].childNodes[0].nodeValue;
	var bookedTime = parseInt(bookedTime.substr(bookedTime.indexOf("T") + 1, 2));
	if (bookedTime < currentHour) {
		return (24 - currentHour) + bookedTime;
	}
	return bookedTime - currentHour;
}

function getRoomAvailHours() {
	var hoursOpen = {}
	var today = new Date()
	var hour = today.getHours();
	if (hour < 10) {
		hour = "0" + toString(hour);
	} else {
		hour = toString(hour);
	}	
	var startTime = today.getFullYear().toString() + "-" + today.getMonth().toString() + "-" + today.getDate().toString() + "T" + hour + ":00:00";
	var endTime = today.getFullYear().toString() + "-" + (today.getMonth() + 1).toString() + "-" + today.getDate().toString() + "T" + hour + ":00:00";
	Object.keys(rooms).forEach(function(key) {
		hoursOpen[key] = getAvailability(key, startTime, endTime, today.getHours());
	});
	return hoursOpen;
}

var availHours = getRoomAvailHours();
