"use strict";


angular.module("Hotflix", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/movie-list", {
                template: `
                <pop-up></pop-up> 
                <movie-list></movie-list>`
            })
            .when("/movie-watchlist", {
                template: `
                <movie-watchlist></movie-watchlist>`
            })
            .otherwise({ redirectTo: "/movie-list"});
})