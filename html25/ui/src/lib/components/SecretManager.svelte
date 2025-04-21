<script>
    let password = $state("");
</script>

<label for="password">Enter the secret password:</label>
<input id="password" type="password" bind:value={password}/>

{#if password === "AW96B6"}
  <p>"Impossible!"</p>
{/if}
{#if password === "Alohomora"}
  <p>Opening up!</p>
{/if}