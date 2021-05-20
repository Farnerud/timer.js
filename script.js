// select the dom elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

// Calculate circle´s radius
const perimeter = Math.floor(circle.getAttribute("r") * 2 * Math.PI);
// Add the perimeter value to the dasharray circle property
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;

// create a new instance of the timer
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer has started");
  },
  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset -= 1;
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
