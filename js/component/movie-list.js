"use strict";

const movieList = {
    template: `
    <p ng-repeat="movie in $ctrl.info.data.results">{{movie.title}} {{movie.actor}} {{movie.release_date}}</p>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;
        MovieService.getMovieList().then((response) => {
            vm.info = response;
        })
    }]
}


angular.module("Hotflix").component("movieList", movieList);