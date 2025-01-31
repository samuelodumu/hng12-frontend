// get and insert current time in UTC format
const currentTime = new Date().toUTCString();
document.getElementById("current-time").innerHTML = currentTime;