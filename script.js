let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let running = false;

function startStopwatch() {
  if (!running) {
    timer = setInterval(updateStopwatch, 1000);
    running = true;
  }
}

function stopStopwatch() {
  if (running) {
    clearInterval(timer);
    running = false;
    addLapse();
  }
}

function resetStopwatch() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  running = false;
  document.getElementById("stopwatch").textContent = "00:00:00";
  document.getElementById("lapses").innerHTML = ""; // Clear lapses
}

function updateStopwatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById("stopwatch").textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

function addLapse() {
  const lapseTime = document.getElementById("stopwatch").textContent;
  const li = document.createElement("li");
  li.textContent = lapseTime;
  document.getElementById("lapses").appendChild(li);
}

document.getElementById("startButton").addEventListener("click", startStopwatch);
document.getElementById("stopButton").addEventListener("click", stopStopwatch);
document.getElementById("resetButton").addEventListener("click", resetStopwatch);