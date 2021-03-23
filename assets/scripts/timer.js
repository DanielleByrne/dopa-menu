console.log("ehe");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

let startTimer = null;

//function to decrement the time
function decTime() {
  if (hour.value == 0 && minute.value == 0 && second.value == 0) {
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
  } else if (second.value != 0) {
    second.value--;
  } else if (minute.value != 0 && second.value == 0) {
    second.value = 59;
    minute.value--;
  } else if (hour.value != 0 && minute.value == 0) {
    minute.value = 60;
    hour.value--;
  }
}


//event listeners
start.addEventListener("click", function () {
  function startInterval() {
    startTimer = setInterval(function () {
      decTime();
    }, 1000);
  }
  startInterval();
});

reset.addEventListener("click", function () {
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
  stopTimer();
});

