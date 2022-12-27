<script>
  import { store } from "../../store";
  import { bubbleSort } from "../../sorts/bubbleSort";
  import { selectionSort } from "../../sorts/selectionSort";
  import { insertionSort } from "../../sorts/insertionSort";
  import { shellSort } from "../../sorts/shellSort";

  let arrayLength = store.array.length;

  $: quadraticDelay = Math.floor(10000 / Math.pow(arrayLength, 2));
  $: logarithmicDelay = Math.floor(10000 / Math.log(arrayLength));

  const handleSort = (sortFunc, delay) => {
    store.delayMs = delay;
    store.start(sortFunc(store));
  };

  const handleSliderChange = () => {
    store.stop();
    store.set(arrayLength);
  };

  const handleGenNewArray = () => {
    store.stop();
    store.set(store.array.length);
  };
</script>

<div class="w-full h-20 bg-purple-500 px-6">
  <div class="max-w-5xl h-full mx-auto flex items-center gap-12">
    <input
      type="range"
      min="5"
      max="100"
      step="1"
      bind:value={arrayLength}
      on:change={handleSliderChange}
    />
    <button on:click={handleGenNewArray}>Generate New Array</button>
    <button
      on:click={() => {
        handleSort(bubbleSort, quadraticDelay);
      }}>Bubble sort</button
    >
    <button
      on:click={() => {
        handleSort(selectionSort, quadraticDelay);
      }}>Selection sort</button
    >
    <button
      on:click={() => {
        handleSort(insertionSort, quadraticDelay);
      }}>Insertion sort</button
    >
    <button
      class="btn"
      on:click={() => {
        handleSort(shellSort, quadraticDelay);
      }}>Shell sort</button
    >
  </div>
</div>
