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

function applyTheme(theme) {
    let element = document.body;
    let button = document.getElementById('toggleBtn');

    if (theme === 'dark') {
        element.classList.add('dark-mode');
        button.innerHTML = "Light Mode";
    } else {
        element.classList.remove('dark-mode');
        button.innerHTML = "Dark Mode";
    }
}

function myFunction() {
    let element = document.body;
    let button = document.getElementById('toggleBtn');
    element.classList.toggle('dark-mode');
    element.style.transition = '1s';


    if (element.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        button.innerHTML = "Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        button.innerHTML = "Dark Mode";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    applyTheme(savedTheme);
});
