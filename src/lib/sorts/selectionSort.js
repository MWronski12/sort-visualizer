export function* selectionSort(store) {
  let n = store.array.length;

  for (var i = 0; i < n; i++) {
    let min = i;

    for (var j = i + 1; j < n; j++) {
      let isLess = store.less(j, min);
      yield;

      if (isLess) {
        min = j;
      }
    }

    if (i != min) {
      store.exch(i, min);
      yield;
    }
  }

  store.stop();
}
