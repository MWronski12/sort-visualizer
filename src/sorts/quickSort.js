export function* quickSort(store) {
  yield* sort(store, 0, store.array.length - 1);
  store.stop();
}

function* sort(store, lo, hi) {
  if (hi <= lo) return;
  let n = yield* partition(store, lo, hi);
  yield* sort(store, lo, n - 1);
  yield* sort(store, n + 1, hi);
}

function* partition(store, lo, hi) {
  let i = lo;
  let j = hi + 1;

  while (true) {
    while (store.less(++i, lo)) {
      yield;
      if (i == hi) break;
    }
    yield;

    while (store.less(lo, --j)) {
      yield;
      if (j == lo) {
        break;
      }
    }

    if (i >= j) {
      break;
    }
    store.exch(i, j);
    yield;
  }

  store.exch(lo, j);
  yield;

  return j;
}
