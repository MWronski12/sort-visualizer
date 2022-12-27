export function* shellSort(store) {
  let n = store.array.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = store.array[i];
      let j;
      for (j = i; j >= gap && store.array[j - gap] > temp; j -= gap) {
        yield;
        store.array[j] = store.array[j - gap];
      }
      store.array[j] = temp;
      yield;
    }
  }

  store.stop();
}
