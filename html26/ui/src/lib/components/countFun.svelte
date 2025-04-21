<script>
    import { useCountStore } from "$lib/stores/counter.svelte.js";
  
    const counter = useCountStore();
  </script>
  
  <button on:click={() => counter.increment()}>Clicks: {counter.count}</button>