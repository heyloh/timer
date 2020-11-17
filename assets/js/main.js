function timer() {
  const clock = document.querySelector('.clock');
  let seconds = 0;
  let timer;

  document.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('start')) {
      clock.classList.remove('paused');
      handleInitClock();
    }

    if (element.classList.contains('pause')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }

    if (element.classList.contains('stop')) {
      clearInterval(timer);
      clock.classList.remove('paused');
      clock.innerHTML = '00:00:00';
      seconds = 0;
    }
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
}

timer();