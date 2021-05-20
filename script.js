
// select the dom elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// create a new instance of the timer
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer has started");
  },
  onTick() {
    console.log("Timer just ticked down");
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
