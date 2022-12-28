// Observable object providing utilities for manipulating
// the array, animating and sorting
class Store {
  constructor(initialSize) {
    this.array = this.genNewArray(initialSize);
    this.observers = [];
    this.lastCompared = [-1, -1];
    this.lastExchanged = [-1, -1];
    this.delayMs = 100;
    this.generator = null;
    this.timeoutId = null;
  }

  /* ------------------------------ Main utility ------------------------------ */
  subscribe(handleNotify) {
    this.observers.push(handleNotify);
  }

  set(size) {
    this.array = this.genNewArray(size);
    this.notifyAll();
  }

  /* --------------------------- Animation utilities -------------------------- */
  start() {
    if (this.generator == null) {
      return;
    }

    this.stop();
    let that = this;

    function loop() {
      that.generator.next();
      that.timeoutId = setTimeout(() => {
        loop();
      }, that.delayMs);
    }

    loop();
  }

  stop() {
    clearTimeout(this.timeoutId);
    this.clearIndicators();
  }

  setGenerator(generator) {
    this.generator = generator(this);
  }

  setDelayMs(delayMs) {
    this.delayMs = delayMs;
  }

  /* ---------------------------- Sorting utilities --------------------------- */
  less(i, j) {
    this.setLastCompared(i, j);
    this.notifyAll();
    return this.array[i] < this.array[j];
  }

  exch(i, j) {
    this.setLastExchanged(i, j);
    this.notifyAll();
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  setElement(k, val) {
    this.array[k] = val;
    this.setLastExchanged(k, -1);
    this.notifyAll();
  }

  /* --------------------------------- private -------------------------------- */
  notifyAll() {
    for (const handleNotify of this.observers) {
      handleNotify();
    }
  }

  genNewArray(size) {
    return new Array(size)
      .fill(0)
      .map((value) => Math.ceil(100 * Math.random()));
  }

  setLastCompared(i, j) {
    this.lastCompared = [i, j];
  }

  setLastExchanged(i, j) {
    this.lastExchanged = [i, j];
  }

  clearIndicators() {
    this.setLastCompared(-1, -1);
    this.setLastExchanged(-1, -1);
    this.notifyAll();
  }
}

const INITIAL_SIZE = 10;
export const store = new Store(INITIAL_SIZE);
