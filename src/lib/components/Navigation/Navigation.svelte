<script>
  import { bubbleSort } from "../../sorts/bubbleSort";

  export let props;
  let value = props.size;
</script>

<div class="w-full h-20 bg-purple-500 px-6">
  <div class="max-w-5xl h-full mx-auto flex items-center gap-12">
    <input
      type="range"
      min="5"
      max="100"
      step="1"
      bind:value
      on:input={(e) => props.changeArraySize(parseInt(e.target.value))}
    />
    <button on:click={() => props.genNewArray(props.size)}
      >Generate New Array
    </button>
    <button
      on:click={() =>
        props.exchange(
          Math.floor(props.size * Math.random()),
          Math.floor(props.size * Math.random())
        )}
      >Exchange Random Elements
    </button>
    <button
      on:click={() =>
        bubbleSort(
          props.array,
          props.less,
          props.exchange,
          props.delayDurationMs
        )}
      >Bubble sort
    </button>
  </div>
</div>
