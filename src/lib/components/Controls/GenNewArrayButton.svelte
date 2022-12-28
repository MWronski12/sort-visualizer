<script>
  import { store } from "../../store";

  const handleGenNewArray = () => {
    store.stop(); // Stop running animation
    store.set(store.array.length); // Generate new array of the same size
  };
</script>

<button on:click={handleGenNewArray}>Generate New Array</button>
