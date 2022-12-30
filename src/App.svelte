<script>
  import Main from "./components/Main.svelte";
</script>

<main>
  <Main />
</main>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;

  main {
    width: 100vw;
    height: 100vh;
  }

  * {
    font-family: "Courier New", Courier, monospace;
  }
</style>
