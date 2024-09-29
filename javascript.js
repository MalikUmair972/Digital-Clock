
function showTime() {
    const time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hrs >= 12) {
        am_pm = "PM";
        if (hrs > 12) hrs -= 12;
    } else if (hrs === 0) {
        hrs = 12;
    }


    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec + " " + am_pm;
}

setInterval(showTime, 1000);
showTime();

function myFunction() {
    let element = document.body;
    element.classList.toggle('dark-mode');
    element.style.transition = '1s';

    let button = document.getElementById('toggleBtn');
    if (element.classList.contains('dark-mode')) {
        button.innerHTML = "Light Mode";
    } else {
        button.innerHTML = "Dark Mode";
    }
}

