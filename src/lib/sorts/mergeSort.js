function* merge(arr, l, m, r, store) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]
  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      store.setElement(k, L[i]);
      yield;
      i++;
    } else {
      arr[k] = R[j];
      store.setElement(k, R[j]);
      yield;
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    store.setElement(k, L[i]);
    yield;
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    store.setElement(k, R[j]);
    yield;
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function* _mergeSort(arr, l, r, store) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + Math.floor((r - l) / 2);
  yield* _mergeSort(arr, l, m, store);
  yield* _mergeSort(arr, m + 1, r, store);
  yield* merge(arr, l, m, r, store);
}

export function* mergeSort(store) {
  yield* _mergeSort(store.array, 0, store.array.length - 1, store);
  store.stop();
}
