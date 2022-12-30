export function* shellSort(store) {
  let n = store.array.length;
  let h = 1;

  // h = 3h + 1 sequence is tested to be well performant
  while (h < Math.floor(n / 3)) h = Math.floor(3 * h + 1);

  while (h > 0) {
    console.log(h + "-sorting...");

    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && store.less(j, j - h); j -= h) {
        yield;
        store.exch(j, j - h);
      }
      yield;
    }

    h = (h - 1) / 3;
  }

  store.stop();
}
