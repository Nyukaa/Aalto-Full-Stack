<script>
    let authorization = $state(null);
    let user = $state(null);
    
    const authenticate = async () => {
      const response = await fetch("http://localhost:8000/api/auth", {
        method: "POST",
        body: JSON.stringify({ password: "Alohomora" })
      });
  
      if (response.status !== 200) {
        alert("Something went wrong!");
        return;
      }
  
      authorization = response.headers.get("Authorization");
      user = await response.json();
    };
  
    const secretAction = async () => {
      const response = await fetch("http://localhost:8000/api/secret/me", {
        headers: {
          Authorization: authorization
        }
    });

    if (response.status !== 200) {
      alert("Something went wrong!");
      return;
    }

    const data = await response.json();
    alert(data.message);
  };
</script>

<button class="btn btn-primary" on:click={authenticate}>Authenticate!</button>

{#if user?.username}
  <p>Authenticated!</p>
  <p>User: {user.username}</p>
  <p>Authorization: {authorization}</p>
  <button class="btn btn-primary" on:click={secretAction}>Do secret action!</button>
{:else}
  <p>Not authenticated!</p>
{/if}