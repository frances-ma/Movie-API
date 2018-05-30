"use strict";

function MovieService($http) {
    let movieData = {};

    const getMovieList = () => {
        return $http({
            method: "GET",
            // url: "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&sort_by=popularity.desc&language=en-US&api_key=f4ae3b639c7d6bc44c596640018ce8b3"
            // url: "https://api.themoviedb.org/3/movies/76341?api_key=f4ae3b639c7d6bc44c596640018ce8b3"
            url: "https://api.themoviedb.org/3/movie/popular?api_key=f4ae3b639c7d6bc44c596640018ce8b3&language=en-US&page=1"
        }).then((response) => {
            movieData = response;
            console.log(movieData);
            return response;
        }) 
    }

    const returnMovieList = () => {
        return movieData;
    }
    return {
        getMovieList,
        returnMovieList
    }
}


angular.module("Hotflix").factory("MovieService", MovieService);    