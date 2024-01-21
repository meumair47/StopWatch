let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const display = document.querySelector(".display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function startTimer() {
  isRunning = true;
  timer = setInterval(updateTime, 10);
}

function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

function updateTime() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  updateDisplay();
}

function updateDisplay() {
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMilliseconds = String(milliseconds).padStart(3, "0");

  display.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTimer();
  }
});

stopBtn.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);
