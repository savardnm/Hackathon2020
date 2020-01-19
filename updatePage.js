var TABLE_ROWS = 5;
var CURRENT_PAGE = 0;

var roomsOpen = {};

var doneLoading = false;

function runGetRooms() {
    roomsOpen = getAllRoomsOpenLength(new Date(JSON.parse(window.sessionStorage.getItem("runningDate"))), new Date(new Date(JSON.parse(window.sessionStorage.getItem("runningDate"))).getTime() + 24 * 60 * 60 * 1000));
}

function checkAllResponsesIn(responseCount) {
    if (responseCount === Object.keys(rooms).length) {
        var loadSymbol = document.getElementById("loadingSymbol");
        var grey = document.getElementById("grey");
        loadSymbol.parentNode.removeChild(loadSymbol);
        grey.style.visibility = "hidden";
        doneLoading = true;
        roomsOpen = fillTable();
        updateListing();
    }
}

function fillTable() {
    var table = [];

    var count = 0;
    for (var key in roomsOpen) {
        if (roomsOpen[key] !== 0) {
            if (count % 5 === 0) {
                var page = {};
                page[key] = roomsOpen[key];
                table.push(page);
            } else {
                table[Math.floor(count / TABLE_ROWS)][key] = roomsOpen[key];
            }
            count++;
        }
    }
    return table;
}

function updateListing() {
    var page = roomsOpen[CURRENT_PAGE];
    var count = 1;
    for (let key in page) {
        document.getElementById("roomR" + count).innerHTML = rooms[key];
        document.getElementById("hoursR" + count).innerHTML = page[key] + " hours";
        document.getElementById("imgR" + count).src = roomPics[key];
        //document.getElementById("linkR" + count).href = "https://25live.collegenet.com/pro/wpi#!/home/location/" + key + "/details";
        count++;
    }
    while (count < 6) {
        document.getElementById("roomR" + count).innerHTML = "";
        document.getElementById("hoursR" + count).innerHTML = "";
        document.getElementById("imgR" + count).src = "";
        count++;
    }
    if (roomsOpen.length > 1) {
        document.getElementById('rButton').disabled = false;
    }
}

function openImage(pos) {
    if (document.getElementById("roomR" + pos).innerHTML !== "") {
        document.getElementById("imgR" + pos).style.visibility = "visible";
        document.getElementById("grey").style.visibility = "visible";
    }
}

function closeImage() {
    if (doneLoading) {
        document.getElementById("imgR1").style.visibility = "hidden";
        document.getElementById("imgR2").style.visibility = "hidden";
        document.getElementById("imgR3").style.visibility = "hidden";
        document.getElementById("imgR4").style.visibility = "hidden";
        document.getElementById("imgR5").style.visibility = "hidden";
        document.getElementById("grey").style.visibility = "hidden";
    }
}
