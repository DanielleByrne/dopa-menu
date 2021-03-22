console.log("ehe");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

let startTimer = null;

//function to decrement the time
function decTime() {}

//function to stop timer
function stopTimer() {
  clearInterval(startTimer);
}

//event listeners
start.addEventListener("click", function () {
  function startInterval() {
    startTimer = setInterval(function () {
      decTime();
    }, 1000);
  }
});

reset.addEventListener("click", function () {
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
  stopTimer();
});

stop.addEventListener("click", function () {
  console.log("stop");
});
