<script>
  import { store } from "../../store";

  export let min;
  export let max;

  let arrayLength = store.array.length;

  const handleSliderChange = () => {
    store.stop(); // Stop running animation
    store.set(arrayLength); // Generate new array of length indicated by slider
  };
</script>

<input
  type="range"
  {min}
  {max}
  step="1"
  bind:value={arrayLength}
  on:input={handleSliderChange}
/>
