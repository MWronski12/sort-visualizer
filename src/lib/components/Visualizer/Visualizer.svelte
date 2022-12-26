<script>
  import Node from "./Node.svelte";

  export let array;
  export let lastCompared;
  export let lastExchanged;
</script>

<div class="w-full grow px-6 py-12">
  <div class="max-w-5xl mx-auto h-full flex items-end justify-between">
    {#each array as value, i}
      <Node
        isLastCompared={lastCompared.includes(i)}
        isLastExchanged={lastExchanged.includes(i)}
        {value}
      />
    {/each}
  </div>
</div>
