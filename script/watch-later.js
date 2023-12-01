
const filmBoxMovies = document.querySelector(".film-box-lists")

function displayMovies(movies) {

  for (const movie of movies) {
    const movieDivContainer = document.createElement('div')
    movieDivContainer.classList.add("film-box");

    const movieImage = document.createElement('img')
    movieImage.src = movie.imagePath
    movieImage.alt = movie.name
    movieImage.loading = 'lazy';

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
      if (value == '[]') {
        return null
      } else {
        return decodeURIComponent(value);
      }
    }
  }
  return null;
}

document.addEventListener('DOMContentLoaded', () => {

  // Get the 'idMovies' cookie
  let idMoviesCookie = getIdMoviesCookie();
  console.log(idMoviesCookie == null);

  const emptyList = document.querySelector(".emptylist")
  const explore = document.querySelector(".explore")

  if (idMoviesCookie !== null) {

    // alert("not null")
    emptyList.classList.add("hide")
    explore.classList.remove("hide")

    // Parse the JSON content of the 'idMovies' cookie into an array
    const idMoviesArray = JSON.parse(idMoviesCookie);

    const watchLaterMoviesArray = movies.filter((movie) => idMoviesArray.includes(String(movie.id)));
    displayMovies(watchLaterMoviesArray)

  } else {
    emptyList.classList.remove("hide")
    explore.classList.add("hide")

  }

})
