// get and insert current time in UTC format
function updateTime() {
    let time = new Date().toUTCString();
    // cut out seconds
    let formattedTime = time.replace(/(:\d{2})\s/, ' ');
    document.getElementById('current-time').innerText = formattedTime;
}

setInterval(updateTime, 1000);
updateTime(); // initial call to prevent delay