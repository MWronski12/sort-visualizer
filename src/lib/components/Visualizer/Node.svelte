<script>
  export let value;
  export let isLastCompared;
  export let isLastExchanged;

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
