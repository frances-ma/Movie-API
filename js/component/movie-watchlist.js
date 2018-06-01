"use strict";

const movieWatchlist = {
    template: `
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.watchlist track by $index">
            <h2 class="card_header">{{movie.title}}</h2>
            <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
            <button class="add_button" ng-click="$ctrl.removeMovie(movie);">Remove Movie</button>
            <button ng-click="$ctrl.editMovie(movie);">More Info</button>
        </section>
    </div>
    <div class="movie_modal">
        <h2 class="card_header">{{$ctrl.theMovie.title}}</h2>
        <img class="theMovie_img" ng-src="https://image.tmdb.org/t/p/w500/{{$ctrl.theMovie.backdrop_path}}">
        <h3 class="theCard_header_three">Release Date: {{$ctrl.theMovie.release_date}}</h3>
        <p class="card_text">{{$ctrl.theMovie.overview}}</p>
        <i class="material-icons close">clear</i>
    </div>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;

        vm.watchlist = MovieService.getWatchlist();
        vm.theMovie = {};
        
        let modal = document.querySelector(".movie_modal");
        let closeBtn = document.querySelector(".close");
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        })

        vm.removeMovie = (movie) => {
            let index = vm.watchlist.indexOf(movie);
            vm.watchlist.splice(index, 1);
        }
        
        vm.addMovie = (movie) => {
            vm.watchList.push(movie);
            MovieService.sendWatchlist(vm.watchList);
            modal.style.display = "none";
        }

        vm.editMovie = (movie) => {
            MovieService.sendWatchlist(vm.watchList);
            vm.theMovie = movie;
            modal.style.display = "flex";
        }
    }]
};


angular.module("Hotflix").component("movieWatchlist", movieWatchlist);