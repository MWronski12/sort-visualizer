<script>
  import Node from "./Node.svelte";
  import { store } from "../../store"

  $: array = store.array;
  store.subscribe(() => (array = store.array));
</script>

<div class="w-full grow px-6 py-12">
  <div class="max-w-5xl mx-auto h-full flex items-end justify-between">
    {#each array as value, i}
      <Node value={value} index={i} />
    {/each}
  </div>
</div>
