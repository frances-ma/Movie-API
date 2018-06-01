"use strict";

const movieWatchlist = {
    template: `
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.watchlist track by $index">
            <h2 class="card_header">{{movie.title}}</h2>
            <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
            <h3 class="card_header_three">Release Date: {{movie.release_date}}</h3>
            <p class="card_text">{{movie.overview}}</p>
            <button class="add_button" ng-click="$ctrl.removeMovie(movie);">Remove Movie</button>
        </section>
    </div>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;

        vm.watchlist = MovieService.getWatchlist();

        vm.removeMovie = (movie) => {
            let index = vm.watchlist.indexOf(movie);
            vm.watchlist.splice(index, 1);
        }
    }]
};


angular.module("Hotflix").component("movieWatchlist", movieWatchlist);