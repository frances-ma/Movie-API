"use strict";


angular.module("Hotflix", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/movie-list", {
                template: `<movie-list></movie-list>`
            })
            .when("/movie-watchlist", {
                template: `<movie-watchlist></movie-watchlist>`
            })
            .otherwise({ redirectTo: "/movie-list"})
})