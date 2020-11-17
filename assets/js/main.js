const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
let seconds = 0;
let timer;

start.addEventListener('click', (event) => {
  handleInitClock();
});

pause.addEventListener('click', (event) => {
  clearInterval(timer);
});

stop.addEventListener('click', (event) => {
  clearInterval(timer);
  clock.innerHTML = '00:00:00';
});


function handleReturnClockTime(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}

function handleInitClock() {
  timer = setInterval(function () {
    seconds++;
    clock.innerHTML = handleReturnClockTime(seconds);
  }, 1000);
}