<script>
  import Range from "./Range.svelte";
  import GenNewArrayButton from "./GenNewArrayButton.svelte";
  import SortButtons from "./SortButtons.svelte";
</script>

<div
  class="w-full min-h-20 bg-gradient-to-tr from-violet-500 to-fuchsia-500 px-6"
>
  <div
    class="max-w-5xl h-full mx-auto flex items-center gap-x-12 gap-y-4 flex-wrap py-4"
  >
    <!-- Slider for changing array size and animation speed accordingly -->
    <Range min="10" max="100" />

    <!-- Generate New Array button -->
    <GenNewArrayButton />

    <!-- Buttons handling all the sorts available in sorts package -->
    <SortButtons />
  </div>
</div>
