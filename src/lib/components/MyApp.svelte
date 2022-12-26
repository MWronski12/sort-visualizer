<script>
  import Navigation from "./Navigation/Navigation.svelte";
  import Visualizer from "./Visualizer/Visualizer.svelte";

  let size = 10;
  let array = new Array(size)
    .fill(0)
    .map((_) => Math.floor(101 * Math.random()));
  let lastCompared = [null, null];
  let lastExchanged = [null, null];
  let delayDurationMs = 1000 / size;

  $: props = {
    array,
    size,
    genNewArray,
    changeArraySize,
    less,
    exchange,
    delayDurationMs,
    lastCompared,
    lastExchanged,
    setLastCompared,
    setLastExchanged,
  };

  /* --------------------------------- public --------------------------------- */
  const genNewArray = (newSize) => {
    setLastCompared(null, null);
    setLastExchanged(null, null);
    array = new Array(newSize)
      .fill(0)
      .map((_) => Math.floor(101 * Math.random()));
  };

  const changeArraySize = (newSize) => {
    size = newSize;
    genNewArray(size);
  };

  const less = (i, j) => {
    setLastCompared(i, j);
    return array[i] < array[j];
  };

  const exchange = (i, j) => {
    setLastExchanged(i, j);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const setLastCompared = (i, j) => {
    lastCompared[0] = i;
    lastCompared[1] = j;
  };

  const setLastExchanged = (i, j) => {
    lastExchanged[0] = i;
    lastExchanged[1] = j;
  };
</script>

<div class="w-full h-full flex flex-col">
  <Navigation {props} />
  <Visualizer {array} {lastCompared} {lastExchanged} />
</div>
