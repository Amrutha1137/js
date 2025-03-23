let startStopButton = document.getElementById('startStopButton');
let resetButton = document.getElementById('resetButton');
let timeDisplay = document.getElementById('timeDisplay');

let timer = null;
let seconds = 0;
let isRunning = false;

function updateTime() {
  let minutes = Math.floor(seconds / 60);
  let sec = seconds % 60;
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function toggleStopwatch() {
  if (isRunning) {
    clearInterval(timer);
    startStopButton.textContent = "Start";
  } else {
    timer = setInterval(function() {
      seconds++;
      updateTime();
    }, 1000);
    startStopButton.textContent = "Stop";
  }
  isRunning = !isRunning;
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  updateTime();
  startStopButton.textContent = "Start";
  isRunning = false;
}

startStopButton.addEventListener('click', toggleStopwatch);
resetButton.addEventListener('click', resetStopwatch);
