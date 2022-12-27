<script>
  import { store } from "../../../stores";

  export let index;
  export let value;

  let isLastExchanged = store.lastExchanged.includes(index);
  let isLastCompared = store.lastCompared.includes(index);

  store.subscribe(() => {
    isLastExchanged = store.lastExchanged.includes(index);
    isLastCompared = store.lastCompared.includes(index);
  });

  $: cssVarStyles = `--height:${value}%;`;
  $: backgroundColorClass = isLastExchanged
    ? "bg-orange-500"
    : isLastCompared
    ? "bg-green-500"
    : "bg-gradient-to-b from-violet-500 to-fuchsia-500";
    
</script>

<div class="node grow {backgroundColorClass}" style={cssVarStyles} />

<style>
  .node {
    height: var(--height);
    margin-right: 1px;
  }
</style>
