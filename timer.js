class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    // reference the parameters to be use in the future
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // if callbacks exists, execute them, if not, run the program as it is
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    // any time the user clicks the dom element, the start method runs
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    // This creates a timerInterval variable across the script
    this.timerInterval = setInterval(this.tick, 20);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }

  pause = () => {
    clearInterval(this.timerInterval);
  };
}
