const movies = [
  {
    id: 0,
    name: "Avengers: Endgame",
    imagePath: "images/main/main1.jpg",
    category: ["Action", "Adventure", "Drama"],
    titleImage: "images/movie-title/avengers-endgame.png",
    publishYear: 2019,
    duration: "3h 01m",
    imdbRating: 8.4,
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    directed: ["Anthony Russo", "Joe Russo"],
    written: ["Christopher Markus", "Stephen McFeely", "Stan Lee"],
  },
  {
    id: 1,
    name: "Joker",
    imagePath: "images/main/main2.jpg",
    category: ["Crime", "Drama", "Thriller"],
    titleImage: "images/movie-title/joker.png",
    publishYear: 2019,
    duration: "2h 02m",
    imdbRating: 8.4,
    description:
      "During the 1980's, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    directed: ["Todd Phillips"],
    written: ["Todd Phillips", "Scott Silver", "Bob Kane"],
  },
  {
    id: 2,
    name: "Mythica: The Darkspore",
    imagePath: "images/main/main3.jpg",
    category: ["Action", "Adventure", "Fantasy"],
    titleImage: "images/movie-title/Mythica The Darkspore.png",
    publishYear: 2015,
    duration: "1h 47m",
    imdbRating: 5.1,
    description:
      "Marek and her company must go on a journey and prevent Szorlok from obtaining all the shards of the Darkspore, or all will be lost.",
    directed: ["Anne K. Black"],
    written: ["Anne K. Black", "Jason Faller", "Kynan Griffin"],
  },
  {
    id: 3,
    name: "Maleficent: Mistress of Evil",
    imagePath: "images/main/main4.jpg",
    category: ["Adventure", "Family", "Fantasy"],
    titleImage: "images/movie-title/Maleficent  Mistress of Evil.png",
    publishYear: 2019,
    duration: "1h 59m",
    imdbRating: 6.6,
    description:
      "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
    directed: ["Joachim Rønning"],
    written: ["Linda Woolverton", "Noah Harpster", "Micah Fitzerman-Blue"],
  },
  {
    id: 4,
    name: "Doctor Strange in the Multiverse of Madness",
    imagePath: "images/main/main5.jpg",
    category: ["Action", "Adventure", "Fantasy"],
    titleImage:
      "images/movie-title/doctor strange in the multiverse of madness.png",
    publishYear: 2022,
    duration: "2h 06m",
    imdbRating: 6.9,
    description:
      "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    directed: ["Sam Raimi"],
    written: ["Michael Waldron", "Stan Lee", "Steve Ditko"],
  },
  {
    id: 5,
    name: "World War Z",
    imagePath: "images/main/main6.jpg",
    category: ["Action", "Adventure", "Horror"],
    titleImage: "images/movie-title/world war z.png",
    publishYear: 2013,
    duration: "1h 56m",
    imdbRating: 7.0,
    description:
      "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.",
    directed: ["Marc Forster"],
    written: ["Matthew Michael Carnahan", "Drew Goddard", "Damon Lindelof"],
  },
  {
    id: 6,
    name: "Inception",
    imagePath: "images/main/main7.jpg",
    category: ["Action", "Adventure", "Sci-Fi"],
    titleImage: "images/movie-title/inception.png",
    publishYear: 2010,
    duration: "2h 28m",
    imdbRating: 8.8,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    directed: ["Christopher Nolan"],
    written: ["Christopher Nolan"],
  },
  {
    id: 7,
    name: "Fury",
    imagePath: "images/main/main8.jpg",
    category: ["Action", "Drama", "War"],
    titleImage: "images/movie-title/fury.png",
    publishYear: 2014,
    duration: "2h 14m",
    imdbRating: 7.6,
    description:
      "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
    directed: ["David Ayer"],
    written: ["David Ayer"],
  },
  {
    id: 8,
    name: "Oppenheimer",
    imagePath: "images/main/main9.jpg",
    category: ["Biography", "Drama", "History"],
    titleImage: "images/movie-title/oppenheimer.png",
    publishYear: 2023,
    duration: "3h ",
    imdbRating: 8.6,
    description:
      "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    directed: ["Christopher Nolan"],
    written: ["Christopher Nolan", "Kai Bird", "Martin Sherwin"],
  },
  {
    id: 9,
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    imagePath: "images/main/main10.jpg",
    category: ["Action", "Adventure", "Fantasy"],
    titleImage:
      "images/movie-title/Pirates of the Caribbean The Curse of the Black Pearl.png",
    publishYear: 2003,
    duration: "2h 23m ",
    imdbRating: 8.1,
    description: `Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.`,
    directed: ["Gore Verbinski"],
    written: ["Ted Elliott", "Terry Rossio", "Stuart Beattie"],
  },
  {
    id: 10,
    name: "The Northman",
    imagePath: "images/main/main11.jpg",
    category: ["Action", "Adventure", "Drama"],
    titleImage: "images/movie-title/the northman.png",
    publishYear: 2022,
    duration: "2h 17m ",
    imdbRating: 7.0,
    description: `A young Viking prince is on a quest to avenge his father's murder.`,
    directed: ["Robert Eggers"],
    written: ["Sjón", "Robert Eggers"],
  },
  {
    id: 11,
    name: "Interstellar",
    imagePath: "images/main/main12.jpg",
    category: ["Adventure", "Drama", "Sci-Fi"],
    titleImage: "images/movie-title/interstellar.png",
    publishYear: 2014,
    duration: "2h 49m ",
    imdbRating: 8.7,
    description: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
    directed: ["Christopher Nolan"],
    written: ["Jonathan Nolan", "Christopher Nolan"],
  },
  {
    id: 12,
    name: "Zootopia",
    imagePath: "images/main/main13.jpg",
    category: ["Animation", "Adventure", "Comedy"],
    titleImage: "images/movie-title/zootopia.png",
    publishYear: 2016,
    duration: "1h 48m ",
    imdbRating: 8.0,
    description: `In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.`,
    directed: ["Byron Howard", "Rich Moore", "Jared Bush"],
    written: ["Byron Howard", "Rich Moore", "Jared Bush"],
  },
];

const navbarHTMLContent = `<div class="navbar-content">

 <div id="logo" onclick="redirectToPage('go to about us page ')">
   <img src="images/main/main1.jpg" alt="our logo">
 </div>

 <div id="home">
   <button onclick="redirectToPage('go to home page ')" type="submit" title="Home Page">
     <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
       <path id="svg-path" d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
     </svg>
   </button>
 </div>

 <form novalidate class="sbx">
       <div class="sbx__wrapper">
         <input class="sbx__input" type="search" name="search" placeholder="Find Movies & TV" autocomplete="off" required="required">
           <button class="sbx__reset" type="reset" title="Clear the search query." >
            <svg role="img" aria-label="Reset"><use xlink:href="#sbx-icon-clear-2"></use></svg>
           </button>
           <button  class="sbx__submit" type="submit" title="Submit your search query.">
            <svg role="img" aria-label="Search"><use xlink:href="#sbx-icon-search-11"></use></svg>
           </button>
       </div>
 </form>
 
 <div id="categories"  class="dropdown">
   <a id="down-symbol" class='dropdown-arrow' >Categories</a>
   <ul class='sub-menus'>
     <li><a href="#" class="category-link">All categories</a></li>
     <li><a href="#" class="category-link">Action</a></li>
     <li><a href="#" class="category-link">Adventure</a></li>
     <li><a href="#" class="category-link">Drama</a></li>
     <li><a href="#" class="category-link">Crime</a></li>
     <li><a href="#" class="category-link">Fantasy</a></li>
     <li><a href="#" class="category-link">Family</a></li>
     <li><a href="#" class="category-link">War</a></li>
     <li><a href="#" class="category-link">Biography</a></li>
     <li><a href="#" class="category-link">History</a></li>
     <li><a href="#" class="category-link">Comedy</a></li>
   </ul>
 </div>

 <a id="toprated" href='#'>Top rated</a>

 <a id="watchlater"  href="watch-later.html">Watch Later</a> 

 <div class="dropdown">
   <button id="three-bar" onclick="displayThreeBarDropDown()" class='dropdown-arrow' type="button" > &equiv; </button>
   <div id="three-bar-content" class='sub-menus'>
     <div id="three-bar-items">
       <button class="cancel-btn" type="button" onclick="displayThreeBarDropDown()" >X</button>
       <a href='#'>Contact us</a>
       <a href='#'>About</a>
       <a href='#'>More information</a>
     </div>
   </div>
 </div>

</div> 
 `;
