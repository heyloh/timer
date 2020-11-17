
start.addEventListener('click', (event) => {
  handleInitClock();
});

pause.addEventListener('click', (event) => {
  clearInterval(timer);
});

