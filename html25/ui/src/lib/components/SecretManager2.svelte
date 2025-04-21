<script>
    let password = $state("");
    let showpass = $state(false);
    let show = () => {
        showpass = true;
    }
  </script>
  
  <label for="password">Enter the secret password:</label>
  <input id="password" type="password" bind:value={password} />
  
  {#if password === "AW96B6" || password === "Alohomora"}
    <button on:click={show}/>
  {:else}
    <button disabled/>
  {/if}
  {#if showpass}
  {#if password === "AW96B6"}
  <p>Impossible!</p>
{:else if password === "Alohomora"}
  <p>Opening up!</p>
{/if}
  {/if}