<script>
    let random = $state(null);
  
    const fetchRandom = async () => {
      const response = await fetch("/api/random");
      const data = await response.json();
      random = data.random;
    }
  </script>
  
  <button on:click={fetchRandom}>New random</button>
  <p>Random: {random}</p>
