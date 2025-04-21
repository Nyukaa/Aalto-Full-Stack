<script>
    let nameday = $state("");
  
    const day = $state(1);
    const month = $state(1);
  
    const fetchNameDay = async () => {
      const data = {
        day: day,
        month: month,
        country: "fi",
      };
  
      const response = await fetch("https://nameday.abalin.net/api/V1/getdate", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
  
      const jsonData = await response.json();
      nameday = jsonData.nameday.fi;
    };
  </script>
  
  <button on:click={fetchNameDay}>Fetch nameday</button>

  <p>Nameday: {nameday}</p>