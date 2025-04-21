<script>
    // JavaScript goes here
    let age = $state(0);
  
    const grow = () => {
      age++;
    };
    const reset = () => {
      age =0;
    };
  </script>
  
  <!-- HTML template goes here -->
  
  <p>Count: {age}</p>
  <button on:click={grow}>Increment</button>
  <button on:click={reset}>Reset</button>
  {#if age == 1}
  <h1>Click, clickiti click click click.</h1>
  {/if}
  {#if age == 5}
  <p>I know I'll get tired of these clicking exercises.</p>
  {/if}
  <style>
    /* CSS goes here */
  </style>