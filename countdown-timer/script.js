// ========== New Years Eve ========== Sets function as variable which calls set interval immediatley. This ALWAYS makes the countdown .5 seconds FAST
const newYears = new Date('January 1, 2021 10:00:00').getTime();

const x = setInterval(function () {

    const curtime = new Date().getTime();

    const distance = newYears - curtime;

    const NYdays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const NYhours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const NYminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const NYseconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("NYdays").innerHTML = NYdays;
    document.getElementById("NYhours").innerHTML = NYhours;
    document.getElementById("NYminutes").innerHTML = NYminutes;
    document.getElementById("NYseconds").innerHTML = NYseconds;
})



// ******** BETTER SOLUTION ********
// ========== Valentines Day ========== Calls function THEN sets the interval. This SOMETIMES makes countdown .5 seconds SLOW
const valentinesDay = '14 Feb 2021';

const VDdays = document.getElementById("VDdays");
const VDhours = document.getElementById("VDhours");
const VDminutes = document.getElementById("VDminutes");
const VDseconds = document.getElementById("VDseconds");


function vdCountdown() {
    const valDay = new Date(valentinesDay);
    const currentTime = new Date();

    const distance = (valDay - currentTime) / 1000;
    console.log("from the function", distance)

    const days = Math.floor(distance / 3600 / 24);
    const hours = Math.floor(distance / 3600) % 24;
    const minutes = Math.floor(distance / 60) % 60;
    const seconds = Math.floor(distance) % 60;

    VDdays.innerHTML = days;
    VDhours.innerHTML = hours;
    VDminutes.innerHTML = minutes;
    VDseconds.innerHTML = seconds;
}

vdCountdown()
setInterval(vdCountdown, 1000);