<script>
    // JavaScript goes here
    import BestJoke from "./BestJoke.svelte";
    import LivingLocations from "./LivingLocations.svelte";
    import AgeDescription from "./AgeDescription.svelte";
    let { name } = $props();
    let age = $state(0);
  
    const grow = () => {
      age++;
    };
  </script>
  
  <!-- HTML template goes here -->
  <p>My name is {name}. I am {age} year{age == 1 ? "" : "s"} old.</p>
  
  <!-- {age} is shorthand for age={age} -->
  <AgeDescription {age} />
  
  <button on:click={grow}>Grow</button>
  
  <LivingLocations />
  
  <BestJoke />
  
  <style>
    /* CSS goes here */
  </style>