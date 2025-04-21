<script>
    // JavaScript goes here
    let { name } = $props();
    let age = $state(0);
  
    let locations = ["Helsinki", "Espoo", "Vantaa"];
  
    const fetchJoke = async () => {
      const response = await fetch("https://simple-joke-api.deno.dev/random");
      return await response.json();
    };
  
    const grow = () => {
      age++;
    };
  </script>
  
  <!-- HTML template goes here -->
  <p>My name is {name}. I am {age} year{age == 1 ? "" : "s"} old.</p>
  {#if age >= 18}
    <p>I am (legally) an adult (in Finland).</p>
  {:else if age >= 4}
    <p>I am a child.</p>
    {:else if age >= 1}
    <p>I am a toddler.</p>
  {:else}
    <p>I am a baby.</p>
  {/if}

<button on:click={grow}>Grow</button>

<p>I have lived in:</p>
<ul>
  {#each locations as location}
    <li>{location}</li>
  {/each}
</ul>

<p>The best joke that I know is:</p>

{#await fetchJoke()}
  <p>Thinking...</p>
{:then joke}
  <p>{joke.setup} -- {joke.punchline}</p>
{/await}

<style>
  /* CSS goes here */
</style>
  