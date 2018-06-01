"use strict";

function MovieService($http) {

    let movieData = {};
    let newWatchlist = {};
    let newGenre = ""; 
    let genreObject = {};
    let searchedMovie = {};
    let movieRatings = {};
    let movieTitles = {};
    let modalInfo =  {};

    // 20 most popular movies 
    const getMovieList = () => {
        return $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&sort_by=popularity.desc&language=en-US&api_key=f4ae3b639c7d6bc44c596640018ce8b3"
        }).then((response) => {
            movieData = response;
            return movieData;
        }) 
    }
    
    // taking in search (string) and see if genres match to show movies 
    const getGenreList = (genre) => {
        return $http({
            method: "GET",
            url: `https://api.themoviedb.org/3/discover/movie?api_key=f4ae3b639c7d6bc44c596640018ce8b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`
        }).then((response) => {
            newGenre = genre; 
            for (let i = 0; i < genreList.length; i++) {
                if (newGenre === genreList.name) {
                console.log("cool"); 
                }
            }
            // genreList = MovieService.getGenreList
            // for (let i = 0; i < genreList.length; i++) {
            //     console.log(genreList[i]);
            // }

            // console.log(response);
            // return response;
        }) 
    }

    // returning list of movies 
    const returnMovieList = () => {
        return movieData;
    }

    // sending favorite movies to watchlist 
    const sendWatchlist = (watchlist) => {
        newWatchlist = watchlist;
        console.log(newWatchlist);
    }

    // returning watchlist 
    const getWatchlist = () => {
        return newWatchlist;
    }

    // give genres back 
    const genreList = () => {
        return $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/genre/movie/list?api_key=f4ae3b639c7d6bc44c596640018ce8b3&language=en-US"
        }).then((response) => {
            genreObject = response;
            return genreObject;
            console.log(genreObject);
        })
    }

    const sendSearchRating = (rating) => {
        return $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/discover/movie?api_key=f4ae3b639c7d6bc44c596640018ce8b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=" + rating
        }).then((response) => {
            movieRatings = response;
        })
    }
    
    const getSearchResults = () => {
        return movieRatings;
    }

    const getMovieTitles = (title) => {
        return $http({
            method: "GET",
            url: `https://api.themoviedb.org/3/discover/movie?api_key=f4ae3b639c7d6bc44c596640018ce8b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&query=${title}`
        }).then((response) => {
            movieTitles = response;
            return movieTitles;
        })
    }

    const getTitleResults = () => {
        console.log(movieTitles);
        return movieTitles;
    }

    const sendModalInfo = (info) => {
        modalInfo = info;
        return modalInfo;
        console.log(modalInfo);
    }



    return {
        genreList,
        getMovieList,
        getGenreList,
        returnMovieList,
        sendWatchlist,
        getWatchlist,
        sendSearchRating,
        getSearchResults,
        getMovieTitles, 
        getTitleResults, 
        sendModalInfo,
        // searchByGenre
    }
}


// const searchByGenre = (genre) => {
//     return $http({
//         method: "GET",
//         url: `https://api.themoviedb.org/3/genre/movie/list?api_key=f4ae3b639c7d6bc44c596640018ce8b3&language=en-US`
//     }).then((response) => {
// const searchByGenre2 = (genre) => {
//     return $http({
//         method: "GET",
//         url: `https://api.themoviedb.org/3/discover/movie?api_key=f4ae3b639c7d6bc44c596640018ce8b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
//     }).then((response) => {
//         for (let i = 0; i < genre.length; i++) {
//         }
// })


angular.module("Hotflix").factory("MovieService", MovieService);    