<script>
    const fetchJoke = async () => {
      const response = await fetch("https://simple-joke-api.deno.dev/random");
      return await response.json();
    
    }
    let age = $state(0);
    const grow = () => {
      age++;
    };
    const reset = () => {
      age =0;
    };
</script>
  
 
  
  <p>Count: {age}</p>
  <button on:click={grow}>Increment</button>
  <button on:click={reset}>Reset</button>
  {#if age == 1}
    {#await fetchJoke()}
        <p>Thinking...</p>
    {:then joke}
        <p>{joke.setup} -- {joke.punchline}</p>
    {/await}
  {/if}
  {#if age == 5}
  <p>I know I'll get tired of these clicking exercises.</p>
  {/if}


  
 
  
  