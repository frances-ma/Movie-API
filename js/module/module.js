"use strict";


angular.module("Hotflix", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/movie-list", {
                template: `
                <poster></poster>
                <movie-list></movie-list>`
            })
            .when("/movie-watchlist", {
                template: `
                <poster></poster>
                <movie-watchlist></movie-watchlist>`
            })
            .otherwise({ redirectTo: "/movie-list"});
})