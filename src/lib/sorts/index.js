import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";
import { shellSort } from "./shellSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";

function getQuadraticDelay(arrayLength) {
  // Most quadratic sorts are ~ (n^2)/2
  return Math.floor(10000 / (Math.pow(arrayLength, 2) / 2));
}

function getLinearithmicDelay(arrayLength) {
  // Linearithmic sorts are running n*log2(n)
  return Math.floor(10000 / (arrayLength * Math.log2(arrayLength)));
}

export default [
  {
    name: "Bubble Sort",
    sort: bubbleSort,
    delay: getQuadraticDelay,
  },
  {
    name: "Insertion Sort",
    sort: insertionSort,
    delay: getQuadraticDelay,
  },
  {
    name: "Selection Sort",
    sort: selectionSort,
    delay: getQuadraticDelay,
  },
  {
    name: "Shell Sort",
    sort: shellSort,
    delay: getLinearithmicDelay,
  },
  {
    name: "Merge Sort",
    sort: mergeSort,
    delay: getLinearithmicDelay,
  },
  {
    name: "Quick Sort",
    sort: quickSort,
    delay: getLinearithmicDelay,
  },
];
