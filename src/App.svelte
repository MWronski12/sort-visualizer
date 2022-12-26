<script>
  import MyApp from "./lib/components/MyApp.svelte";
</script>

<main>
  <MyApp />
</main>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;

  main {
    width: 100vw;
    height: 100vh;
  }
</style>
