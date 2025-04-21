<script>
    let joke = $state();
  
    const fetchRandomJoke = async () => {
      const response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
      const data = await response.json();
      joke = data.joke;
    };
  </script>
  
  <button on:click={fetchRandomJoke}>Query API</button>
  
  <br/>
  
  <p>joke: {joke}</p>
  