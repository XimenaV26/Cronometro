const stopwatch = document.getElementById("stopwatch");
const playPausedButton = document.getElementById("play-pause");
const secondsSphere = document.getElementById("seconds-sphere");

//Guardar el inetrvalo de 1 segundo en 1 segundo
let stopwatchInterval;

//Llevar la cuenta del tiempo transucurrido
let runningTime = 0;

const playPause = () => {
  const isPaused = !playPausedButton.classList.contains("running");
  if (isPaused) {
    playPausedButton.classList.add("running");
    start();
  } else {
    playPausedButton.classList.remove("running");
    pause();
  }
};

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval)
};

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPausedButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00'
}

const start = () => {
  secondsSphere.style.animation = "rotacion 60s linear infinite";
  let startTime = Date.now() - runningTime;
  secondsSphere.style.animationPlayState = "running";
  stopwatchInterval = setInterval(() => {
    runningTime = Date.now() - startTime;
    stopwatch.textContent = calculateTime(runningTime);
  }, 1000);
};

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, '0');
    const display_minutes = total_minutes.toString().padStart(2, '0');

    return `${display_minutes}:${display_seconds}`
}