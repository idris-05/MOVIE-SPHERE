
function displayMoreSimilairMovies (movies){

    const moreMoviesContainer = document.querySelector(".more-movies-container") 
  
    for ( const movie of movies){
        const movieDivContainer = document.createElement('div') 
        movieDivContainer.classList.add("film-box") ; 
 
        const movieImage = document.createElement('img')
        movieImage.src = movie.imagePath
        movieImage.alt = movie.name ;
 
        const movieName = document.createElement('h4')
        movieName.textContent = movie.name ;
 
        const movieCategories = document.createElement('h6')
        movieCategories.textContent = movie.category.join(' ');
 
        movieDivContainer.addEventListener("click", () => {
            window.location.href = `details.html?id=${movie.id}`;
        });
 
        movieDivContainer.appendChild(movieImage)
        movieDivContainer.appendChild(movieName)
        movieDivContainer.appendChild(movieCategories) ;

        const box = document.createElement('div')
        box.classList.add("box");

        box.appendChild(movieDivContainer)
 
        moreMoviesContainer.appendChild(box) ;
    }
}

const queryParams2 = new URLSearchParams(window.location.search)
const movieId2 = queryParams2.get("id")
const newArrayMovires = movies.filter((movie) => movie.id != movieId2);

for ( let i = 0 ; i< 3 ; i++){
    displayMoreSimilairMovies(newArrayMovires)
}