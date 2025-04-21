<script>
    let text = $state("");
    let disabled = $state(false);
  </script>
  
  <input type="text" bind:value={text} disabled={disabled} />
  Typing disabled <input type="checkbox" bind:checked={disabled} />
  
  <p>
    Text: {text}
  </p>