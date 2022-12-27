export function* insertionSort(store) {
  let n = store.array.length;

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0 && store.less(j + 1, j); j--) {
      yield;
      store.exch(j + 1, j);
      yield;
    }
  }

  store.clearIndicators();
}
