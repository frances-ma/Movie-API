"use strict";

const searchTitle = {
    template: `
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.movieTitles.data.results">
            <h2 class="card_header">{{movie.title}}</h2>
            <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
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
            modal.style.display = "flex";
        }
    }]
     
}


angular.module("Hotflix").component("searchTitle", searchTitle);


/* <button class="nav_button" type="button">Search</button> 
   <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">
*/