export function* selectionSort(store) {
  let n = store.array.length;

  for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (store.less(j, min)) {
        min = j;
      }
      yield;
    }

    store.exch(i, min);
    yield;
  }

  store.stop();
}
