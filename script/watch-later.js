
function getIdMoviesCookie() {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'idMovies') {
      return decodeURIComponent(value);
    }
  }
  return null;
}

// Get the 'idMovies' cookie
const idMoviesCookie = getIdMoviesCookie();

if (idMoviesCookie !== null) {
  // Parse the JSON content of the 'idMovies' cookie into an array
  const idMoviesArray = JSON.parse(idMoviesCookie);
  idMoviesArray.forEach(idMovie => {
    const myDiv = document.createElement('p')
    myDiv.innerHTML = movies[idMovie].name
    const myMovieContainer = document.getElementById('movie-container')
    myMovieContainer.appendChild(myDiv)
  });
} else {
  console.log("null")
}