<script>
    const retrieveData = async () => {
      const response = await fetch("http://localhost:8000/", {
        headers: {
          API_KEY: "Alohomora",
        },
      });
  
      if (response.status !== 200) {
        alert("Something went wrong!");
        return;
      }
  
      const data = await response.json();
      alert(data.pass);
    };
  </script>
  
  <button class="btn btn-primary" on:click={retrieveData}>Go!</button>
  <h1>Check key API.
     ...used from a client-side application with a fetch request.
    
    Clicking the button makes a request to the server, utilizing the API key in the process.
  </h1>
