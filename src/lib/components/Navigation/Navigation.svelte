<script>
  import { bubbleSort } from "../../sorts/bubbleSort";
  import { store } from "../../../stores";

  let value = store.array.length;

  console.log(store.less(0, 1));

  const handleBubbleSort = () => {
    bubbleSort(store.array, store.less, store.exch);
  }

  const handleSlider = (e) => {
    store.set(parseInt(e.target.value));
  };

  const handleGenNewArray = () => {
    store.set(store.array.length);
  };

  const handleExchangeRandomElements = () => {
    store.exch(
      Math.floor(store.array.length * Math.random()),
      Math.floor(store.array.length * Math.random())
    );
  };
</script>

<div class="w-full h-20 bg-purple-500 px-6">
  <div class="max-w-5xl h-full mx-auto flex items-center gap-12">
    <input
      type="range"
      min="5"
      max="100"
      step="1"
      bind:value
      on:input={handleSlider}
    />
    <button on:click={handleGenNewArray}>Generate New Array</button>
    <button on:click={handleExchangeRandomElements}
      >Exchange Random Elements
    </button>
    <button on:click={handleBubbleSort}>Bubble sort</button>
  </div>
</div>
