export function* bubbleSort(store) {
  let n = store.array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (store.less(j + 1, j)) {
        yield;
        store.exch(j, j + 1);
      }
      yield;
    }
  }

  store.stop();
}
