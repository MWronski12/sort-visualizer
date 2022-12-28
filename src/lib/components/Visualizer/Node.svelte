<script>
  import { store } from "../../store";

  // Each node knows its index and value in the store.array
  export let index;
  export let value;

  // Keeping track of last compared and last exchanged
  $: isLastExchanged = store.lastExchanged.includes(index);
  $: isLastCompared = store.lastCompared.includes(index);

  store.subscribe(() => {
    isLastExchanged = store.lastExchanged.includes(index);
    isLastCompared = store.lastCompared.includes(index);
  });

  // Dynamic CSS classes
  $: cssVarStyles = `--height:${value}%;`;
  $: backgroundColorClass = isLastExchanged
    ? "bg-gradient-to-b from-orange-500 to-yellow-500"
    : isLastCompared
    ? "bg-gradient-to-b from-green-500 to-teal-500"
    : "bg-gradient-to-b from-violet-500 to-fuchsia-500";
</script>

<!-- Node is a colored rectangle div -->
<div class="node grow {backgroundColorClass}" style={cssVarStyles} />

<style>
  .node {
    height: var(--height);
    margin-right: 1px;
  }
</style>
