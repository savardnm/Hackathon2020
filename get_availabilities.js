var hoursOpen = {}; 

function getAvailability(id, startTime, endTime, currentHour) {
	var xhr = new XMLHttpRequest();
	var url = live_base_url + id + live_start_time_url + startTime + live_end_time_url + endTime + live_modifiers_url;
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onloadend = function () {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			processResponse(xhr.responseXML, currentHour, id);
		}
	};
	xhr.onError = function () {
		console.log("Request Failed");
	};
}

function processResponse(xml, currentHour, id) {
	var reservations = xml.getElementsByTagName("r25:space_reservation");
	if (reservations.length == 1) {
		hoursOpen[id] = 24;
		document.getElementById('hours').innerHTML = 24;
		return;
	}
	var bookedTime = xml.getElementsByTagName("r25:reservation_start_dt")[0].childNodes[0].nodeValue;
	var bookedTime = parseInt(bookedTime.substr(bookedTime.indexOf("T") + 1, 2));
	if (bookedTime < currentHour) {
		hoursOpen[id] = (24 - currentHour) + bookedTime;
		document.getElementById('hours').innerHTML = (24 - currentHour) + bookedTime;
		return;
	}
	hoursOpen[id] = bookedTime - currentHour;
	document.getElementById('hours').innerHTML = bookedTime - currentHour;
}

function getRoomAvailHours() {
	var today = new Date()
	var hour = fillZeroString(today.getHours());
	var month = fillZeroString(today.getMonth() + 1);
	var startDay = fillZeroString(today.getDate());
	var endDay = fillZeroString(today.getDate() + 1);
	
	var startTime = today.getFullYear().toString() + "-" + month + "-" + startDay + "T" + hour + ":00:00";
	var endTime = today.getFullYear().toString() + "-" + month + "-" + endDay + "T" + hour + ":00:00";
	
	Object.keys(rooms).forEach(function(key) {
		getAvailability(key, startTime, endTime, today.getHours());
	});
	while (Object.keys(hoursOpen).length < 39) {
		
	}
}

function fillZeroString(date) {
	if (date < 10) {
		date = "0" + date.toString();
	} else {
		date = date.toString();
	}
	return date;
}
