
const filmBoxMovies = document.querySelector(".film-box-lists")
const repeatDisplay = 1

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

for (let i = 0; i < repeatDisplay; i++) {
    displayMovies(movies);
}


const categoriesLink = document.querySelectorAll(".category-link")
let newArrayMovies = []

categoriesLink.forEach((category) => { 

    category.addEventListener("click", () => {

        while (filmBoxMovies.firstChild) {
            filmBoxMovies.removeChild(filmBoxMovies.firstChild);
        }

        const categoryName = category.innerHTML

        if (categoryName == 'All categories') {
            newArrayMovies = movies
        } else {
            newArrayMovies = movies.filter((movie) => movie.category.includes(categoryName))
        }
    
        for (let i = 0; i < repeatDisplay; i++) {
            displayMovies(newArrayMovies);
        }

    })

})


function displayMovieBasedOnRatingTopRated() {

    while (filmBoxMovies.firstChild) {
        filmBoxMovies.removeChild(filmBoxMovies.firstChild);
    }

    newArrayMovies = movies.slice();
    newArrayMovies.sort((a, b) => b.imdbRating - a.imdbRating);

    for (let i = 0; i < repeatDisplay; i++) {
        displayMovies(newArrayMovies);
    }

}

const topRated = document.getElementById("toprated")
topRated.addEventListener('click', displayMovieBasedOnRatingTopRated)

