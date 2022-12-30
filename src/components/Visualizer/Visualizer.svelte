<script>
  import Node from "./Node.svelte";
  import { store } from "../../store";

  // Keeping track of changes to the store
  let array = store.array;
  store.subscribe(() => (array = store.array));
</script>

<div class="w-full grow px-6 py-12">
  <div class="max-w-5xl mx-auto h-full flex items-end justify-between">
    <!-- Render all the store.array elements as Nodes -->
    {#each array as value, i}
      <Node {value} index={i} />
    {/each}
  </div>
</div>
