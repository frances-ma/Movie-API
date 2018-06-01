"use strict";

const searchResults = {
    template: `
    <div id="movie_box">
        <section class="movie_card" ng-repeat="movie in $ctrl.movieTitles.data.results">
            <h2 class="card_header">{{movie.title}}</h2>
            <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
            <button class="add_button" ng-click="$ctrl.addMovie(movie);">Add Movie</button>
            <button class="add_button" ng-click="$ctrl.editMovie(movie);">More Info</button>
        </section>
    </div>
    <div class="movie_modal">
        <h2 class="card_header">{{$ctrl.theMovie.title}}</h2>
        <img class="theMovie_img" ng-src="https://image.tmdb.org/t/p/w500/{{$ctrl.theMovie.backdrop_path}}">
        <h3 class="theCard_header_three">Release Date: {{$ctrl.theMovie.release_date}}</h3>
        <p class="card_text">{{$ctrl.theMovie.overview}}</p>
        <button class="add_button" ng-click="$ctrl.modalMovie($ctrl.theMovie);"> Add Movie </button>
        <i class="material-icons close">clear</i>
    </div>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;
        vm.watchList = [];
        vm.movieTitles = MovieService.getSearchResults();
        vm.theMovie = {};
        let modal = document.querySelector(".movie_modal");
        let closeBtn = document.querySelector(".close");
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        })
        console.log(vm.movieTitles);
        

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
            let modal = document.querySelector(".movie_modal");
            modal.style.display = "flex";
        }
    }]
     
}


angular.module("Hotflix").component("searchResults", searchResults);


/* <button class="nav_button" type="button">Search</button> 
   <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">
*/