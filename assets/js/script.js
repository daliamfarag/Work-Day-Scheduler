let currentDayEl = document.getElementById("currentDay");
currentDayEl.innerText = moment().format("[Today is] dddd, MMMM Do YYYY");
let timeblockEls = document.getElementsByClassName("time-block");

function colorCode() {
    for (var i = 0; i < timeblockEls.length; i++) {
        let hour = parseInt(timeblockEls[i].children[0].innerText);
        if (hour < 9) {
            hour = hour + 12;
        }
        if (moment().hour() < hour) {
            timeblockEls[i].children[1].className += " future";
        } else if (moment().hour() > hour) {
            timeblockEls[i].children[1].className += " past";
        } else {
            timeblockEls[i].children[1].className += " present";
        }
    }
}
colorCode();

let eventEls = document.getElementsByClassName("event")
function maintainEvents() {
    for (var i = 0; i < eventEls.length; i++) {
        eventEls[i].id = `event${i + 9}`;
        let localStorageVal = localStorage.getItem(`event${i + 9}`);
        if (localStorageVal) {
            eventEls[i].children[0].setAttribute("value", localStorageVal);
        }
    }
}
maintainEvents();

function saveEvent() {
    localStorage.setItem(this.parentElement.parentElement.children[1].id, this.parentElement.parentElement.children[1].children[0].value);
}

let saveBtns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", saveEvent);
}