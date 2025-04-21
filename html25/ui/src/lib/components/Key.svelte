<script>
    let keystrokeCount = $state(0);
    let key = $state("");
  
    const showKey = (event) => {
      keystrokeCount++;
      key = event.key;
    };
  </script>
  
  <textarea on:keyup={showKey} />
  
  <p>
    Last key pressed: {key}, total keystrokes: {keystrokeCount}
  </p>