async function getRandomChuckNorrisJoke() {
  const apiUrl = 'https://api.chucknorris.io/jokes/random';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error('Error getting joke:', response.status);
      return;
    }
    const data = await response.json();
    console.log('Chuck Norris\'s random joke:', data.value);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

getRandomChuckNorrisJoke();
