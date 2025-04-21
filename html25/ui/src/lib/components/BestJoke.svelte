<script>
    const fetchJoke = async () => {
      const response = await fetch("https://simple-joke-api.deno.dev/random");
      return await response.json();
    };
  </script>
  
  <p>The best joke that I know is:</p>
  
  {#await fetchJoke()}
    <p>Thinking...</p>
  {:then joke}
    <p>{joke.setup} -- {joke.punchline}</p>
  {/await}