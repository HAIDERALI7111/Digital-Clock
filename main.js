"use strict";
function clock() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["january", "February", "March", "April", "May", "june", "july", "August", "September", "October", "November", "December"];
    let hrs = document.getElementById("hours");
    let mins = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    let period = document.getElementById("ampm");
    let date = document.getElementById("ddmmyy");
    let day = document.getElementById("dd");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    let ampm = h <= 12 ? "AM" : "PM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    mins.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = months[mm] + "" + dd + ", " + yy;
}
setInterval(clock, 1000);
