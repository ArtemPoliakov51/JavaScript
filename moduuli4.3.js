document.getElementById('searchForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();

  if (!query) {
    console.log("Please enter the title of the series.");
    return;
  }

  const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error("Error while retrieving data:", response.status);
      return;
    }
    const data = await response.json();
    console.log("Search results:", data);

    if (data.length === 0) {
      resultsContainer.innerHTML = '<p>Nothing found.</p>';
      return;
    }


    data.forEach(tvShow => {
      const { show } = tvShow;
      const article = document.createElement('article');


      const title = document.createElement('h2');
      title.textContent = show.name;
      article.appendChild(title);


      if (show.url) {
        const link = document.createElement('a');
        link.href = show.url;
        link.textContent = 'Read more';
        link.target = '_blank';
        article.appendChild(link);
      }


      if (show.image?.medium) {
        const img = document.createElement('img');
        img.src = show.image.medium;
        img.alt = show.name;
        article.appendChild(img);
      }


      if (show.summary) {
        const summary = document.createElement('div');
        summary.innerHTML = show.summary;
        article.appendChild(summary);
      }


      resultsContainer.appendChild(article);
    });
  } catch (error) {
    console.error("An error occurred:", error);
    resultsContainer.innerHTML = '<p>An error occurred while retrieving data.</p>';
  }
});
