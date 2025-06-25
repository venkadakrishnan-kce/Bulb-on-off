// https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_960_720.png
// https://cdn.pixabay.com/photo/2013/07/13/10/45/bulb-157717_1280.png

const on_btn = document.getElementById("on");
const off_btn = document.getElementById("off");
const img = document.getElementById("bulb");

function bulb_on() {
  img.src = "https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_1280.png";
}

function bulb_off() {
  img.src = "https://cdn.pixabay.com/photo/2013/07/13/10/45/bulb-157717_960_720.png";
}