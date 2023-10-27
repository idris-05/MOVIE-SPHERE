
const navbarContainer = document.getElementById("menu")
navbarContainer.innerHTML = navbarHTMLContent

function displayThreeBarDropDown() {
    const myThreeBarDropDown = document.getElementById("three-bar-content")
    myThreeBarDropDown.classList.toggle("set-three-bar-drop-down-to-display-block")

    const threeBarItems = document.getElementById("three-bar-items")
    threeBarItems.classList.toggle("animated-three-bar-show-up")
}

function setResponsiveMenu() {
    const limitWidth = 850
    const navbarContent = document.querySelector(".navbar-content")
    const threeBarItems = document.getElementById("three-bar-items")
    const myElemenets = [
        document.getElementById("watchlater"),
        document.getElementById("toprated"),
        document.getElementById("categories"),
    ]

    function changeParent() {

        const viewPortWindow = window.innerWidth

        if (viewPortWindow < limitWidth) {
            myElemenets.forEach(element => {
                if (element.parentElement != threeBarItems) {
                    threeBarItems.insertBefore(element, threeBarItems.firstChild)
                }
            });
        }
        else {
            myElemenets.forEach(element => {
                if (element.parentElement != navbarContent) {
                    navbarContent.insertBefore(element, navbarContent.children[3])
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
window.onscroll = function () {
    var currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu").style.top = "0";
    } else {
        document.getElementById("menu").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

function hideLogoOrHome() {
    const home = document.getElementById("home")
    const logo = document.getElementById("logo")
    const viewPortWindow = window.innerWidth
    const limitWidth = 850

    if (viewPortWindow < limitWidth) {
        logo.classList.add("hide-logo-or-home")
        home.classList.remove("hide-logo-or-home")
    }
    else {
        logo.classList.remove("hide-logo-or-home")
        home.classList.add("hide-logo-or-home")
    }
}
hideLogoOrHome()
window.addEventListener("resize", hideLogoOrHome)

