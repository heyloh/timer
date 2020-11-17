
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
