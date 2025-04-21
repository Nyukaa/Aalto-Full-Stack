
  const fetchRandomJoke = async () => {
  
    const response = await fetch("https://simple-joke-api.deno.dev/random", {
      method: "GET",
    });
  
  
    const jsonData = await response.json();
    return jsonData;
  };

export { fetchRandomJoke };
