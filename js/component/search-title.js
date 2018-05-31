"use strict";

const searchTitle = {
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
                        <input ng-model="$ctrl.movieGenre;" type="text" placeholder="Genre">
                        <button ng-click="$ctrl.searchGenre($ctrl.movieGenre);" class="search_button" type="button" >Genre</button>
                    </div>
                    <div class="movie_input">
                        <input ng-model="$ctrl.movieTitle;" type="text" placeholder="Title">
                        <button class="search_button" type="button" >Title</button>
                    </div>
                    <div class="movie_input">
                        <input ng-model="$ctrl.movieRating;" type="text" placeholder="Rating">
                        <button class="search_button" type="button" ng-click="$ctrl.searchRating($ctrl.movieRating);">Rating</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="right_nav">
            <a href="#!/movie-list">Home</a>
            <a href="#!/movie-watchlist" ng-click="$ctrl.submit();">Watchlist</a>
        </div>
    </nav>
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.movieTitles.data.results">
            <h2 class="card_header">{{movie.title}}</h2>
            <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
            <h3 class="card_header_three">Release Date: {{movie.release_date}}</h3>
            <p class="card_text">{{movie.overview}}</p>
            <button class="add_button" ng-click="$ctrl.addMovie(movie);">Add Movie</button>
            <button class="add_button" ng-click="$ctrl.editMovie(movie);">More Info</button>
        </section>
    </div>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;
        vm.watchList = [];
        vm.movieTitles = MovieService.getTitleResults();
        console.log(vm.movieTitles);

        vm.addMovie = (movie) => {
            vm.watchList.push(movie);
            MovieService.sendWatchlist(vm.watchList);
        }

        vm.editMovie = (movie) => {
            let modal = document.querySelector(".movie_modal");
            modal.style.display = "block";
        }
    }]
     
}


angular.module("Hotflix").component("searchTitle", searchTitle);


/* <button class="nav_button" type="button">Search</button> 
   <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">
*/