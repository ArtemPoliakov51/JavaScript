document.getElementById('searchForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();
  if (!query) {
    console.log("Please enter a keyword to search.");
    return;
  }

  const apiUrl = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`;
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error('Error while receiving jokes:', response.status);
      resultsContainer.innerHTML = '<p>An error occurred while retrieving data.</p>';
      return;
    }

    const data = await response.json();
    if (data.total === 0) {
      resultsContainer.innerHTML = '<p>No jokes found.</p>';
      return;
    }

    data.result.forEach(joke => {
      const article = document.createElement('article');
      const paragraph = document.createElement('p');
      paragraph.textContent = joke.value;
      article.appendChild(paragraph);
      resultsContainer.appendChild(article);
    });
  } catch (error) {
    console.error('An error occurred:', error);
    resultsContainer.innerHTML = '<p>An error occurred while processing your request.</p>';
  }
});
