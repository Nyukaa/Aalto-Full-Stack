<script>
  // JavaScript goes here
  let { name } = $props();
  let age = $state(0);

  const grow = () => {
    age++;
  };
</script>

<!-- HTML template goes here -->

<p>My name is {name}. I am {age} years old.</p>
<button on:click={grow}>Grow</button>
<!-- Second way to do funcion-->
<button on:click={() => age++}>Grow</button>
<style>
  /* CSS goes here */
</style>