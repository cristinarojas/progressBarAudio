(function() {
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var timer = document.getElementById('timer');
  var count = 0;
  var intervalId;

  start.addEventListener('click', function() {
    handleSetInterval('start');
  }, false);

  stop.addEventListener('click', function() {
    handleSetInterval('stop');
  }, false);

  // Initialize setInterval
  function handleSetInterval(status) {
    if (status === 'start') {
      intervalId = setInterval(play, 1000);
    } else {
      clearInterval(intervalId);
    }
  }

  // Methods
  function play() {
    if (count === 10) {
      handleSetInterval('stop');
    } else {
      count = count + 1;
      timer.innerHTML = count + " secs";
      bar.style.width = count + "%";
    }
  }

  /*function stop() {
    clearInterval(setInterval);
  }*/
})();
