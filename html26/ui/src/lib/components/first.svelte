<script>
    let items = $state([]);
    let text = $state("");
    let n = $state(0);
    const addItem = () => {
        items.push(text);
        n = items.length;
        text='';
    }
  </script>
  <label for="item">Type in the item name:</label>
  <input id="item" type="text" bind:value={text}/><br/>
  <button on:click={addItem}>Add</button>
  
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  <p>The list has {n} item{n == 1? '': 's'}.</p>
  
  