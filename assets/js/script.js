let Today = document.getElementById("today");
Today.innerText = moment().format("[Today is] dddd, MMMM Do YYYY");
let timehour = document.getElementsByClassName("time-hour");

function Pastpresentfuture() {
    for (var i = 0; i < timehour.length; i++) {
        let hour = parseInt(timehour[i].children[0].innerText);
        if (hour < 9) {
            hour = hour + 12;
        }
        if (moment().hour() < hour) {
            timehour[i].children[1].className += " future";
        } else if (moment().hour() > hour) {
            timehour[i].children[1].className += " past";
        } else {
            timehour[i].children[1].className += " present";
        }
    }
}
Pastpresentfuture();

let eventblock = document.getElementsByClassName("event")
function eventschedule() {
    for (var i = 0; i < eventblock.length; i++) {
        eventblock[i].id = `event${i + 9}`;
        let localStorageVal = localStorage.getItem(`event${i + 9}`);
        if (localStorageVal) {
            eventblock[i].children[0].setAttribute("value", localStorageVal);
        }
    }
}
eventschedule();

function eventsave() {
    localStorage.setItem(this.parentElement.parentElement.children[1].id, this.parentElement.parentElement.children[1].children[0].value);
}

let saveBtns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", eventsave);
}