"use strict"; 

const popUp = {
    template: `
    <div class="movie_modal">
        <h2 class="card_header">{{movie.title}}</h2>
        <img class="movie_img" ng-src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}">
        <h3 class="card_header_three">Release Date: {{movie.release_date}}</h3>
        <p class="card_text">{{movie.overview}}</p>
        <button class="add_button" ng-click="$ctrl.addMovie(movie);"> Add Movie </button>
        <i class="material-icons close">clear</i>
    </div>
    `, 

    controller: ["MovieService", function(MovieService) {
       const vm = this; 
       vm.modal_info = MovieService.returnMovieList();

    }] 
}





angular.module("Hotflix").component("popUp", popUp); 