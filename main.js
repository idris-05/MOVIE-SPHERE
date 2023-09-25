
  const navbarContainer = document.getElementById("menu")
  navbarContainer.innerHTML = navbarHTMLContent

function displayMovies (){

   const filmBoxMovies = document.querySelector(".film-box-lists") 
 
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
        window.location.href = `details.html`;
     });

     movieDivContainer.appendChild(movieImage)
     movieDivContainer.appendChild(movieName)
     movieDivContainer.appendChild(movieCategories) ;

     filmBoxMovies.appendChild(movieDivContainer) ;

    }

}

function toggleMode(){
    
    const myBodyPage = document.body
    myBodyPage.classList.toggle("light-mode")

    const darkSvgPath =  'M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z'
    const lightSvgPath = 'M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z'
    const currentPath = document.getElementById("svg-path").getAttribute('d')
    
    if ( currentPath == lightSvgPath ){
        document.getElementById("svg-path").setAttribute('d', darkSvgPath )
    } else{
        document.getElementById("svg-path").setAttribute('d', lightSvgPath )
    }

    const svgImage = document.querySelector('#mode svg')
    svgImage.classList.remove("animation-to-big"); 
    setTimeout(() => {
        svgImage.classList.add("animation-to-big"); 
    }, 0);
}

function displayThreeBarDropDown(){
    const myThreeBarDropDown = document.getElementById("three-bar-content")
    myThreeBarDropDown.classList.toggle("set-three-bar-drop-down-to-display-block")

    const threeBarItems = document.getElementById("three-bar-items")
    threeBarItems.classList.toggle("animated-three-bar-show-up")
}

function setResponsiveMenu(){
    const limitWidth = 850
    const navbarContent = document.querySelector(".navbar-content")
    const threeBarItems = document.getElementById("three-bar-items")
    const myElemenets = [ 
        document.getElementById("watchlater") ,
        document.getElementById("toprated") ,
        document.getElementById("categories") ,
        document.getElementById("latest") 
    ]

    function changeParent(){

        const viewPortWindow = window.innerWidth

        if (viewPortWindow < limitWidth ){
            myElemenets.forEach(element => {
                if ( element.parentElement != threeBarItems){
                    threeBarItems.insertBefore( element , threeBarItems.firstChild )
                }
            });
        }
        else {
             myElemenets.forEach(element => {
                if ( element.parentElement != navbarContent){
                    navbarContent.insertBefore( element , navbarContent.children[3] )
                }
            });
        }
    }
    changeParent()
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(changeParent, 50); 
    });
}
setResponsiveMenu()

var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

function redirectToPage(url) {
    window.location.href = url;
}

function hideLogoOrHome(){
    const home = document.getElementById("home")
    const logo = document.getElementById("logo")
    const viewPortWindow = window.innerWidth
    const limitWidth = 850

    if ( viewPortWindow < limitWidth ){
        logo.classList.add("hide-logo-or-home")
        home.classList.remove("hide-logo-or-home")
    }
    else {
        logo.classList.remove("hide-logo-or-home")
        home.classList.add("hide-logo-or-home")
    }
}
hideLogoOrHome()
window.addEventListener("resize" , hideLogoOrHome )



for ( let i = 0 ; i< 9 ; i++){
    displayMovies()
}