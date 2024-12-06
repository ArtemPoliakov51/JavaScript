document.getElementById('searchForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const query = document.getElementById('query').value.trim();
      if (!query) {
        console.log("Pleas, enter the name of the show");
        return;
      }

      const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          console.error("Error while retrieving data:", response.status);
          return;
        }
        const data = await response.json();
        console.log("Search results:", data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });