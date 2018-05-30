"use strict";

const movieList = {
    template: `
    <nav class="nav_bar">
        <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">
        <button type="button">Search</button>
        <a href="#">Search</a>
        <a href="#!/movie-list">Home</a>
        <a href="#!/movie-watchlist">Watchlist</a>
    </nav>
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.info.data.results | filter:$ctrl.info.data.results.title">
            <h2>{{movie.title}}</h2>
            <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
            <h3>Release Year: {{movie.release_date}}</h3>
            <p>{{movie.overview}}</p>
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
            console.log(vm.watchList);
        }
    }]

}


angular.module("Hotflix").component("movieList", movieList);