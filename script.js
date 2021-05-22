// select the dom elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

// Calculate circle´s radius
const perimeter = Math.floor(circle.getAttribute("r") * 2 * Math.PI);
// Add the perimeter value to the dasharray circle property
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
// create a new instance of the timer
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
