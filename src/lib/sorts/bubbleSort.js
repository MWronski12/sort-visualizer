export function* bubbleSort(store) {
  let n = store.array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let isLess = store.less(j + 1, j);
      yield;
      if (isLess) {
        store.exch(j, j + 1);
        yield;
      }
    }
  }

  store.setLastCompared(-1, -1);
  store.setLastExchanged(-1, -1);
}
