<script>
  import { store } from "../../store";
  import sortUtilityList from "../../sorts";

  const handleSort = (sortFunc, delay) => {
    store.setGenerator(sortFunc);
    store.setDelayMs(delay);
    store.start();
  };
</script>

<!-- Buttons handling all the sorts available in sorts package -->
{#each sortUtilityList as sortUtility}
  <button
    on:click={() => {
      handleSort(sortUtility.sort, sortUtility.delay(store.array.length));
    }}>{sortUtility.name}</button
  >
{/each}
