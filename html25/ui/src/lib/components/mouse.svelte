<script>
    let count = $state(0);
    let mouse = $state({ x: 0, y: 0 });
  
    const incrementCount = () => {
      count++;
    };
  
    const mouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
  </script>
  
  <button on:mouseenter={incrementCount} on:click={incrementCount} on:mousemove={mouseMove}>
    Hovered or clicked {count} times.
  </button>
  
  <p>
    Mouse moved at x: {mouse.x}, y: {mouse.y}
  </p>