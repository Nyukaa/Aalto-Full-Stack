<script>
    import { useItemStore } from "$lib/stores/items.svelte.js";
    const itemStore = useItemStore();
    
    const addItem = () => {
      itemStore.add(`Item ${itemStore.items.length + 1}`);
    };
  </script>
  
  <button on:click={addItem}>Add item</button>
  
  <p>Items:</p>
  <ul>
    {#each itemStore.items as item}
      <li>{item}</li>
    {/each}
  </ul>