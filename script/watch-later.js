
const filmBoxMovies = document.querySelector(".film-box-lists")

function displayMovies(movies) {

  for (const movie of movies) {
      const movieDivContainer = document.createElement('div')
      movieDivContainer.classList.add("film-box");

      const movieImage = document.createElement('img')
      movieImage.src = movie.imagePath
      movieImage.alt = movie.name;

      const movieName = document.createElement('h4')
      movieName.textContent = movie.name;

      const movieCategories = document.createElement('h6')
      movieCategories.textContent = movie.category.join(' ');

      movieDivContainer.addEventListener("click", () => {
          window.location.href = `details.html?id=${movie.id}`;
      });

      movieDivContainer.appendChild(movieImage)
      movieDivContainer.appendChild(movieName)
      movieDivContainer.appendChild(movieCategories);

      filmBoxMovies.appendChild(movieDivContainer);

  }
}



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

  console.log(idMoviesArray)

  const watchLaterMoviesArray = movies.filter((movie) => idMoviesArray.includes(String(movie.id)));

  console.log(watchLaterMoviesArray)
  
 displayMovies(watchLaterMoviesArray)

} else {
  console.log(" hna lazem nkteb f html file ,  makach 7ta movie rak 7ato f watch list ,  ,,, id movie from cookies is null , from watch-later.js file")
}