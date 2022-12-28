<script>
  import { store } from "../../store";
  import sortUtilityList from "../../sorts";

  /* ----------------------------- Slider handler ----------------------------- */
  let arrayLength = store.array.length;
  const handleSliderChange = () => {
    store.stop();
    store.set(arrayLength);
  };

  /* ----------------------------- Button handlers ---------------------------- */
  const handleSort = (sortFunc, delay) => {
    store.setGenerator(sortFunc);
    store.setDelayMs(delay);
    store.start();
  };

  const handleGenNewArray = () => {
    store.stop();
    store.set(store.array.length);
  };
</script>

<div
  class="w-full min-h-20 bg-gradient-to-tr from-violet-500 to-fuchsia-500 px-6"
>
  <div
    class="max-w-5xl h-full mx-auto flex items-center gap-x-12 gap-y-4 flex-wrap py-4"
  >
    <!-- Slider for changing array size and animation speed accordingly -->
    <input
      type="range"
      min="10"
      max="100"
      step="1"
      bind:value={arrayLength}
      on:input={handleSliderChange}
    />

    <!-- Generate New Array button -->
    <button on:click={handleGenNewArray}>Generate New Array</button>

    <!-- Buttons handling all the sorts available in sorts package -->
    {#each sortUtilityList as sortUtility}
      <button
        on:click={() => {
          handleSort(sortUtility.sort, sortUtility.delay(arrayLength));
        }}>{sortUtility.name}</button
      >
    {/each}
    
  </div>
</div>
