import { bubbleSort } from "./sorts/bubbleSort";

const INITIAL_SIZE = 10;

class Store {
  constructor(initialSize) {
    this.array = this.genNewArray(initialSize);
    this.observers = [];
    this.lastCompared = [-1, -1];
    this.lastExchanged = [-1, -1];
    this.timeoutId = null;
    this.delayMs = 100;
  }

  /* --------------------------------- public --------------------------------- */
  subscribe(handleNotify) {
    this.observers.push(handleNotify);
  }

  set(size) {
    this.array = this.genNewArray(size);
    this.notifyAll();
  }

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

  start(generator) {
    this.stop();

    let that = this;

    function loop() {
      generator.next();
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

  /* --------------------------------- private -------------------------------- */
  notifyAll() {
    for (const handleNotify of this.observers) {
      handleNotify();
    }
  }

  genNewArray(size) {
    return new Array(size)
      .fill(0)
      .map((value) => Math.floor(101 * Math.random()));
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

export const store = new Store(INITIAL_SIZE);
