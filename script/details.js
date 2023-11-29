
const queryParams = new URLSearchParams(window.location.search)
const movieId = queryParams.get("id")


function displayMovieDetailsInformation(){
    const movie = movies[movieId]

    if ( movieId == null ){
        // console.log('error movieId is null ')
    } else {

        myRoot = document.querySelector(":root")
        myRoot.style.setProperty("--url-of-background-movie-image" , `url("${movie.imagePath}")` )

        const movieTitleIimage = document.getElementById("movie-title-image")
        movieTitleIimage.setAttribute('src' , movie.titleImage )
        movieTitleIimage.setAttribute('alt' , movie.name )

        const moviePublishYear = document.getElementById("publish-year")
        moviePublishYear.innerText = movie.publishYear

        const movieDuration = document.getElementById("movie-duration")
        movieDuration.innerText = movie.duration

        const movieImdbRating = document.getElementById("imdb-rating")
        movieImdbRating.innerText = movie.imdbRating

        const movieCategory = document.getElementById("category")
        movie.category.forEach(category => {
            const movieCategoryNavContainer = document.createElement('nav')
            movieCategoryNavContainer.innerText = category 
            movieCategory.appendChild(movieCategoryNavContainer)
        });

        const movieDescreption =document.getElementById("descreption-text")
        movieDescreption.innerText =movie.description

        const movieDirector = document.getElementById("directed")
        movieDirector.innerText =movie.directed.join(' , ')

        const movieWriter =document.getElementById("written")
        movieWriter.innerText = movie.written.join(' , ')
    }

}
displayMovieDetailsInformation()


function getWatchLaterListFromCookies(){
    // get the current saved movies from the cookie
    const cookies = document.cookie.split('; ')
    let idMovies = []
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=')
      if (name === 'idMovies') {
        idMovies = JSON.parse(value)
        // break
      }
    }
    return idMovies 
}

function loadSaveOrUnsaveButton(id){

    let idMovies = getWatchLaterListFromCookies()  
    const idPosition = idMovies.indexOf(id) 
    const saveNowImage = document.querySelector('.save-now')
    const alreadySavedImage = document.querySelector('.already-saved')

    if ( idPosition == -1){ 
        saveNowImage.classList.remove('hide-save-or-saved-svg-image')
        alreadySavedImage.classList.add('hide-save-or-saved-svg-image')
    } else {
        alreadySavedImage.classList.remove('hide-save-or-saved-svg-image')
        saveNowImage.classList.add('hide-save-or-saved-svg-image')
    }

}

window.addEventListener("load" ,()=>{
    loadSaveOrUnsaveButton(movieId)
})


function manageWatchLaterCookie(id) {
    
    let idMovies = getWatchLaterListFromCookies()    
    const idPosition = idMovies.indexOf(id) 
    const saveNowImage = document.querySelector('.save-now')
    const alreadySavedImage = document.querySelector('.already-saved')

    if ( idPosition == -1){
        idMovies.push(id)
        alreadySavedImage.classList.remove('hide-save-or-saved-svg-image')
        saveNowImage.classList.add('hide-save-or-saved-svg-image')
    } else {
        idMovies.splice(idPosition , 1)
        saveNowImage.classList.remove('hide-save-or-saved-svg-image')
        alreadySavedImage.classList.add('hide-save-or-saved-svg-image')
    }

    //  return back to the cookie 
    const cookieDelay = 600000
    const expirationDate = new Date() 
    expirationDate.setTime(expirationDate.getTime() + cookieDelay )
    document.cookie = `idMovies=${JSON.stringify(idMovies)}; expires=${expirationDate.toUTCString()}; path=/`

    // alert(`movie ${movies[id].name} is add to the watch later list`)
   
}

const saveToLaterButton = document.getElementById('save-to-later')
saveToLaterButton.addEventListener('click', function () {
    manageWatchLaterCookie(movieId);
})







