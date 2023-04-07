class heap {
  constructor(store) {
    this.store = store;
  }

  *sort() {
    let N = this.store.array.length;
    for (let i = Math.floor(N / 2); i >= 1; i--) {
      yield* this.sink(i, N);
    }
    while (N > 1) {
      this.exch(1, N);
      yield;
      yield* this.sink(1, --N);
    }
  }

  *sink(i, N) {
    while (i <= Math.floor(N / 2)) {
      let j;
      if (i * 2 + 1 > N) {
        j = i * 2;
      } else {
        if (this.less(i * 2, i * 2 + 1)) {
          j = i * 2 + 1;
        } else {
          j = i * 2;
        }
        yield;
      }
      if (this.less(i, j)) {
        yield;
        this.exch(i, j);
        yield;
      }
      i = j;
    }
  }

  less(i, j) {
    let result = this.store.less(--i, --j);
    return result;
  }

  exch(i, j) {
    this.store.exch(--i, --j);
  }
}

export function* heapSort(store) {
  let h = new heap(store);
  yield* h.sort();
  store.stop();
}
