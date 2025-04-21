<script>
  let count = $state({
    value: 0,
    
  });

  const incrementCount = () => {
    count.value++;
  };
  const decrementCount = () => {
    count.value--;
  };
</script>

<h1>Count: {count.value}</h1>
<button on:click={incrementCount}>Increment</button>
<button on:click={decrementCount}>Decrement</button>