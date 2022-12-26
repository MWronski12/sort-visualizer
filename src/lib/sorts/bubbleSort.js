function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export async function bubbleSort(array, less, exch, delayDuration) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      await delay(delayDuration);
      if (less(j + 1, j)) {
        await delay(delayDuration);
        exch(j, j + 1);
      }
    }
  }
}
