"use strict";

const headerComponent = {
    template: `
    <header class="header">
        <img class="logo" src="img/HF-LOGO.png">
        <h1>Hot Flix</h1>
    </header>
    <nav class="nav_bar">
        <div class="left_nav">
            <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Search</button>
                <div id="myDropdown" class="dropdown-content">
                    <div class="movie_input">
                        <input ng-model="$ctrl.movieTitle" type="text" placeholder="Title">
                        <button ng-click="$ctrl.searchTitles($ctrl.movieTitle);" class="search_button" type="button">Title</button>
                    </div>
                    <div class="movie_input">
                        <input ng-model="$ctrl.movieRating" type="text" placeholder="Rating">
                        <button class="search_button" type="button" ng-click="$ctrl.searchRating($ctrl.movieRating);">Rating</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="right_nav">
            <a href="#!/movie-list">Home</a>
            <a href="#!/movie-watchlist">Watchlist</a>
        </div>
    </nav>
    `,
    controller: ["$location", "MovieService", function($location, MovieService) {
        const vm = this;
        vm.updateWatchlist = MovieService.getWatchlist();
        console.log(vm.updateWatchlist);
        vm.searchGenre = (genre) => {
            MovieService.genreList(genre).then(() => {
                $location.path("/search-genre");
            });
        }

       vm.searchRating = (rating) => {
          MovieService.sendSearchRating(rating).then(() => {
              $location.path("/search-results");
          });
       }

       vm.searchTitles = (title) => {
          MovieService.getMovieTitles(title).then(() => {
              $location.path("/search-title");
          })
       }

       vm.sendList = (list) => {
            MovieService.sendWatchlist(vm.updateWatchlist);
       }
    }]
     
}


angular.module("Hotflix").component("headerComponent", headerComponent);


/* <button class="nav_button" type="button">Search</button> 
   <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">

                    <div class="movie_input">
                        <input ng-model="$ctrl.movieGenre" type="text" placeholder="Genre">
                        <button ng-click="$ctrl.searchGenre($ctrl.movieGenre);" class="search_button" type="button">Genre</button>
                    </div>
*/