import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";
import { shellSort } from "./shellSort";

function getQuadraticDelay(arrayLength) {
  return Math.floor(10000 / Math.pow(arrayLength, 2));
}

function getLogarithmicDelay(arrayLength) {
  return Math.floor(10000 / Math.log(arrayLength));
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
    delay: getLogarithmicDelay,
  },
];
