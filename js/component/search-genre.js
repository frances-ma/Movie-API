"use strict";

const searchGenre = {
    template: `
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.searchGenre.data.results">
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
        vm.theMovie = {};
        let modal = document.querySelector(".movie_modal");
        let closeBtn = document.querySelector(".close");
        // closeBtn.addEventListener("click", function() {
        //     modal.style.display = "none";
        // })
        vm.searchGenre = MovieService.getTitleResults();

        vm.addMovie = (movie) => {
            vm.watchList.push(movie);
            MovieService.sendWatchlist(vm.watchList);
            modal.style.display = "none";
        }

        vm.modalMovie = (movie) => {
            vm.watchList.push(movie);
            MovieService.sendWatchlist(vm.watchList);
            modal.style.display = "none";
        }

        vm.editMovie = (movie) => {
            vm.theMovie = movie;
            modal.style.display = "flex";
        }
    }]
     
}


angular.module("Hotflix").component("searchGenre", searchGenre);


/* <button class="nav_button" type="button">Search</button> 
   <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">
*/