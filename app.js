const timerNumber = document.getElementById('stopwatch');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

const display = document.getElementById('display');

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let outputMiliseconds;
let outputSeconds;
let outputMinutes;
let outputHours;

let interval;

const timer = () => {
  interval = setInterval(() => {
    miliseconds += 10;
    if (miliseconds == 1000) {
      miliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    if (seconds < 10) {
      outputSeconds = '0' + seconds.toString();
    } else {
      outputSeconds = seconds;
    }

    if (minutes < 10) {
      outputMinutes = '0' + minutes.toString();
    } else {
      outputMinutes = minutes;
    }

    if (hours < 10) {
      outputHours = '0' + hours.toString();
    } else {
      outputHours = hours;
    }

    display.textContent = `${outputHours}:${outputMinutes}:${outputSeconds}:${miliseconds}`;
  }, 10);
};

const start = () => {
  clearInterval(interval);
  timer();
};

const pause = () => {
  clearInterval(interval);
};

const reset = () => {
  clearInterval(interval);
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = '00:00:00:000';
};

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
