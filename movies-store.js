const movies = [
  {
      id: 0,
      name: 'Avengers: Endgame',
      imagePath: 'images/main/main1.jpg',
      category: ['Action', 'Adventure', 'Drama'],
      
  },
  {
      id: 1,
      name: 'Joker',
      imagePath: 'images/main/main2.jpg',
      category: ['Crime', 'Drama', 'Thriller'],
  },
  {
      id: 2,
      name: 'Mythica: The Darkspore',
      imagePath: 'images/main/main3.jpg',
      category: ['Action', 'Adventure', 'Fantasy'],
  },
  {
      id: 3,
      name: 'Maleficent: Mistress of Evil',
      imagePath: 'images/main/main4.jpg',
      category: ['Adventure', 'Family', 'Fantasy'],
  },
  {
      id: 4,
      name: 'Doctor Strange in the Multiverse of Madness',
      imagePath: 'images/main/main5.jpg',
      category: ['Action', 'Adventure', 'Fantasy'],
  },
  {
      id: 5,
      name: 'Alone',
      imagePath: 'images/main/main6.jpg',
      category: ['Thriller'],
  },
  {
      id: 6,
      name: 'Inception',
      imagePath: 'images/main/main7.jpg',
      category: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
      id: 7,
      name: 'Fury',
      imagePath: 'images/main/main8.jpg',
      category: ['Action', 'Drama', 'War'],
  },
  {
      id: 8,
      name: 'Oppenheimer',
      imagePath: 'images/main/main9.jpg',
      category: ['Biography', 'Drama', 'History'],
  },
  {
      id: 9,
      name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
      imagePath: 'images/main/main10.jpg',
      category: ['Action', 'Adventure', 'Fantasy'],
  },
  {
      id: 10,
      name: 'The Northman',
      imagePath: 'images/main/main11.jpg',
      category: ['Action', 'Adventure', 'Drama'],
  },
  {
      id: 11,
      name: 'Interstellar',
      imagePath: 'images/main/main12.jpg',
      category: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
      id: 12,
      name: 'Zootopia',
      imagePath: 'images/main/main13.jpg',
      category: ['Animation', 'Adventure', 'Comedy'],
  },
];


 const navbarHTMLContent =
 `
  <div class="navbar-content hide-navbar-in-bigening">
     <div id="logo" class="clickable-div" onclick="redirectToPage('go to about us page ')">
       <img src="images/main/main1.jpg" alt="our logo">
     </div>
     <div id="home">
       <button onclick="redirectToPage('go to home page ')" type="submit" title="Home Page">
         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
           <path id="svg-path" d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
         </svg>
       </button>
     </div>
     <form novalidate class="searchbox sbx-amazon">
           <div class="sbx-amazon__wrapper">
             <input type="search" name="search" placeholder="Search..." autocomplete="off" required="required" class="sbx-amazon__input">
               <button type="reset" title="Clear the search query." class="sbx-amazon__reset">
                <svg role="img" aria-label="Reset"><use xlink:href="#sbx-icon-clear-2"></use></svg>
               </button>
               <button type="submit" title="Submit your search query." class="sbx-amazon__submit">
                <svg role="img" aria-label="Search"><use xlink:href="#sbx-icon-search-11"></use></svg>
               </button>
           </div>
     </form>
     <a id="latest" href='main.html'>Latest</a>
       <div id="categories"  class="dropdown">
           <a id="down-symbol" class='dropdown-arrow' >Categories</a>
           <ul class='sub-menus'>
             <li><a href="#">Action</a></li>
             <li><a href="#">Adventure</a></li>
             <li><a href="#">Drama</a></li>
             <li><a href="#">Crime</a></li>
             <li><a href="#">Fantasy</a></li>
             <li><a href="#">Family</a></li>
             <li><a href="#">War</a></li>
             <li><a href="#">Biography</a></li>
             <li><a href="#">History</a></li>
             <li><a href="#">Comedy</a></li>
           </ul>
       </div>
     <a id="toprated" href='#'>Top rated</a>
     <a id="watchlater"  href='http://'>Watch Later</a> 
     <div id="mode"> 
           <button onclick="toggleMode()" type="submit" title="dark / light mode">
             <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
               <path id="svg-path" d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"/>
             </svg>
           </button>
     </div>
     <div class="dropdown">
       <button id="three-bar" onclick="displayThreeBarDropDown()" class='dropdown-arrow' type="button" > &equiv; </button>
       <div id="three-bar-content" class='sub-menus'>
         <div id="three-bar-items">
           <button type="button" onclick="displayThreeBarDropDown()" class="cancel-btn">X</button>
           <a href='#'>Contact us</a>
           <a href='#'>About</a>
           <a href='#'>More information</a>
         </div>
       </div>
     </div>
   </div> ` 
