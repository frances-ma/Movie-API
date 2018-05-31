"use strict";

const movieList = {
    template: `
    <header class="header">
        <img class="logo" src="img/HF-LOGO.png">
        <h1>Hot Flix</h1>
    </header>
    <nav class="nav_bar">
        <div class="left_nav">
            <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">
            <button class="nav_button" type="button">Search</button>
        </div>
        <div class="right_nav">
            <a href="#!/movie-list">Home</a>
            <a href="#!/movie-watchlist" ng-click="$ctrl.submit();">Watchlist</a>
        </div>
    </nav>
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.info.data.results | filter:$ctrl.info.data.results.title">
            <h2 class="card_header">{{movie.title}}</h2>
            <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
            <h3 class="card_header_three">Release Date: {{movie.release_date}}</h3>
            <p class="card_text">{{movie.overview}}</p>
            <button class="add_button" ng-click="$ctrl.addMovie(movie);"> Add Movie </button>
        </section>
    </div>
    
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;
        vm.watchList = [];
        MovieService.getMovieList().then((response) => {
            vm.info = response;
        })
        vm.addMovie = (movie) => {
            vm.watchList.push(movie);
        }
        vm.submit = () => {
            MovieService.sendWatchlist(vm.watchList);
        }
    }]

}


angular.module("Hotflix").component("movieList", movieList);