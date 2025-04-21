<script>
    import { fetchFinnishNameDay } from "../../http-actions/nameday-api.js";
    let nameday = $state("");
  
    const day = $state(1);
    const month = $state(2);
  
    const fetchNameDay = async () => {
      nameday = await fetchFinnishNameDay(day, month);
    };
  </script>
  
  <button on:click={fetchNameDay}>Fetch nameday</button>
  
  <p>Nameday: {nameday}</p>