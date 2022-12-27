<script>
  import { store } from "../../store";

  import sorts from "../../sorts";

  let arrayLength = store.array.length;

  $: quadraticDelay = Math.floor(10000 / Math.pow(arrayLength, 2));
  $: logarithmicDelay = Math.floor(10000 / Math.log(arrayLength));

  const handleSort = (sortFunc, delay) => {
    store.setGenerator(sortFunc);
    store.setDelayMs(delay);
    store.start();
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

<div class="w-full min-h-20 bg-gradient-to-tr from-violet-500 to-fuchsia-500 px-6">
  <div
    class="max-w-5xl h-full mx-auto flex items-center gap-x-12 gap-y-4 flex-wrap py-4"
  >
    <input
      type="range"
      min="5"
      max="100"
      step="1"
      bind:value={arrayLength}
      on:input={handleSliderChange}
    />
    <button on:click={handleGenNewArray}>Generate New Array</button>

    {#each sorts as sort}
      <button
        on:click={() => {
          handleSort(sort.sort, sort.delay(arrayLength));
        }}>{sort.name}</button
      >
    {/each}
  </div>
</div>
