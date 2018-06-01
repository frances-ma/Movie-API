"use strict";


angular.module("Hotflix", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/movie-list", {
                template: `
                <pop-up></pop-up>
                <header-component></header-component>
                <movie-list></movie-list>`
            })
            .when("/movie-watchlist", {
                template: `
                <header-component></header-component>
                <movie-watchlist></movie-watchlist>`
            })
            .when("/search-results", {
                template: `
                <header-component></header-component>
                <search-results></search-results>
                `
            })
            .when("/search-title", {
                template: `
                <header-component></header-component>
                <search-title></search-title>
                `
            })
            .when("/search-genre", {
                template: `
                <header-component></header-component>
                <search-genre>/search-genre>
                `
            })
            .otherwise({ redirectTo: "/movie-list"});
})