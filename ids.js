let live_base_url = "https://cors-anywhere.herokuapp.com/https://25live.collegenet.com/25live/data/wpi/run/rm_reservations.xml?space_id="

let live_start_time_url = "&start_dt="

let live_end_time_url = "&end_dt="

let live_modifiers_url = "&include=blackouts+pending+related+empty&caller=pro-ReservationDao.getReservations"

let rooms = {
    5: "AK 116",
    7: "AK 219",
    8: "AK 232",
    9: "AK 233",
    //69:"FL 222 - IMGD Computer Lab",
    10: "FL 311",
    //12:"FL 320",
    //395:"FL A021 'Zoo Lab' (CS or IMGD ONLY)",
    228: "FL Lower Perreault Hall",
    229: "FL Upper Perreault Hall:",
    216:"GH 007",
    //171:"GH 109",
    172: "GH 110",
    //207: "GH 206",
    311:"GH 207",
    14: "GH 227",
    //218:"GH 306",
    //217:"GH 307",
    //77:"Harrington Auditorium",
    17: "HL 114",
    18: "HL 116",
    19: "HL 154",
    20: "HL 202",
    21: "HL 218",
    22: "HL 230",
    25: "KH 115",
    26: "KH 116",
    //313:"KH 203",
    28: "KH 204",
    30: "OH 107",
    //337:"OH 109",
    31: "OH 126",
    32: "OH 218",
    33: "OH 223",
    41: "SL 011",
    42: "SL 104",
    43: "SL 105",
    44: "SL 115",
    45: "SL 123",
    46: "SL 305",
    //206:"SL 402",
    //47:"SL 406",
    //49:"SL 407",
    //257:"SL 411",
    //314:"SH 003",
    34: "SH 106",
    35: "SH 202",
    36: "SH 203",
    37: "SH 306",
    38: "SH 308",
    39: "SH 304",
    40: "SH 309",
    58: "CC 129 Chairman's Conference Room",
    63: "CC 301 Hagglund Conference Room",
    61: "CC 331 Mid-Century Room",
    //64:"CC Odeum A",
    //65:"CC Odeum B",
    //67:"CC Odeum C"
};

var roomPics = {
    5: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=97&caller=S25ImageDao.getUrl-pro",
    7: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=119&width=768&caller=S25ImageDao.getUrl-pro",
    8: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=58&caller=S25ImageDao.getUrl-pro",
    9: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=88&caller=S25ImageDao.getUrl-pro",
    69: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=188&width=768&caller=S25ImageDao.getUrl-pro",
    10: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=78&caller=S25ImageDao.getUrl-pro",
    12: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=79&caller=S25ImageDao.getUrl-pro",
    395:"https://previews.123rf.com/images/ginasanders/ginasanders1109/ginasanders110900012/10486806-an-unsuspecting-woman-shrugs-shrug-of-helplessness-and.jpg",
    228: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=150&caller=S25ImageDao.getUrl-pro",
    229: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=152&caller=S25ImageDao.getUrl-pro",
    216:"https://c8.alamy.com/comp/MR72CY/young-male-chemist-in-white-coat-with-shrug-gesture-isolated-on-white-MR72CY.jpg",
    171:"https://c8.alamy.com/comp/BMRTX0/scientist-shrugging-because-he-cant-solve-the-problem-isolated-on-BMRTX0.jpg",
    172: "https://www.thesports.physio/wp-content/uploads/2015/08/wpid-photo-20150804001125738.jpg",
    207: "https://image.shutterstock.com/image-photo/portrait-woman-doctor-shrugging-shoulders-260nw-407740225.jpg",
    311:"https://media.istockphoto.com/photos/asian-woman-shrugging-shoulder-i-dont-know-gesture-picture-id1151058000",
    14: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=74&width=768&caller=S25ImageDao.getUrl-pro",
    218:"https://upload.wikimedia.org/wikipedia/commons/4/47/Laurie_Leshin_in_2015.jpg",
    217:"https://static3.bigstockphoto.com/8/4/1/large1500/148643585.jpg",
    77:"https://pbs.twimg.com/media/Bu2t_xwCUAAHZQh.jpg",
    17: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=67&caller=S25ImageDao.getUrl-pro",
    18: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=65&caller=S25ImageDao.getUrl-pro",
    19: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=66&caller=S25ImageDao.getUrl-pro",
    20: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=12&caller=S25ImageDao.getUrl-pro",
    21: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=14&caller=S25ImageDao.getUrl-pro",
    22: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=87&caller=S25ImageDao.getUrl-pro",
    25: "https://i.groupme.com/1280x720.jpeg.bebe7ba8b14e42d8a82b8ee0b32c6cda",
    26: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=112&caller=S25ImageDao.getUrl-pro",
    313:"https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/a8af71b9ae2b3a4c9a40d1e11af692b7/large.png",
    28: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=116&caller=S25ImageDao.getUrl-pro",
    30: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=157&caller=S25ImageDao.getUrl-pro",
    337:"https://image.shutterstock.com/image-photo/businesswoman-shaking-head-reject-no-260nw-703011427.jpg",
    31: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=75&caller=S25ImageDao.getUrl-pro",
    32: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=76&caller=S25ImageDao.getUrl-pro",
    33: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=77&caller=S25ImageDao.getUrl-pro",
    41: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=158&caller=S25ImageDao.getUrl-pro",
    42: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=73&caller=S25ImageDao.getUrl-pro",
    43: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=80&caller=S25ImageDao.getUrl-pro",
    44: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=304&caller=S25ImageDao.getUrl-pro",
    45: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=85&caller=S25ImageDao.getUrl-pro",
    46: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=64&caller=S25ImageDao.getUrl-pro",
    206: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=135&caller=S25ImageDao.getUrl-pro",
    47: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=55&caller=S25ImageDao.getUrl-pro",
    49: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=54&caller=S25ImageDao.getUrl-pro",
    257:"https://25live.collegenet.com/25live/data/wpi/run/image?image_id=156&caller=S25ImageDao.getUrl-pro",
    314:"https://media.istockphoto.com/videos/confused-male-teacher-or-scientist-shrugging-his-shoulders-looking-at-video-id1142487081?s=640x640",
    34: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=134&caller=S25ImageDao.getUrl-pro",
    35: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=143&width=768&caller=S25ImageDao.getUrl-pro",
    36: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=147&caller=S25ImageDao.getUrl-pro",
    37: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=148&width=768&caller=S25ImageDao.getUrl-pro",
    38: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=136&caller=S25ImageDao.getUrl-pro",
    39: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=142&width=768&caller=S25ImageDao.getUrl-pro",
    40: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=137&caller=S25ImageDao.getUrl-pro",
    58: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=57&caller=S25ImageDao.getUrl-pro",
    63: "https://vignette.wikia.nocookie.net/wpi/images/2/24/Hagglund.JPG/revision/latest/scale-to-width-down/340?cb=20080627090321",
    61: "https://25live.collegenet.com/25live/data/wpi/run/image?image_id=68&caller=S25ImageDao.getUrl-pro",
    64:"https://25live.collegenet.com/25live/data/wpi/run/image?image_id=27&width=768&caller=S25ImageDao.getUrl-pro",
    65:"https://25live.collegenet.com/25live/data/wpi/run/image?image_id=27&caller=S25ImageDao.getUrl-pro",
    67:"https://25live.collegenet.com/25live/data/wpi/run/image?image_id=27&width=768&caller=S25ImageDao.getUrl-pro"
};

window.addEventListener('load', e => {
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            alert('ServiceWorker registration failed. Sorry about that.');
        }
    } else {
        document.querySelector('.alert').removeAttribute('hidden');
    }
}