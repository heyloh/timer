
function handleInitClock() {
  timer = setInterval(function () {
    seconds++;
    clock.innerHTML = handleReturnClockTime(seconds);
  }, 1000);
}