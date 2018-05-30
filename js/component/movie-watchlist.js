"use strict";

const movieWatchlist = {
    template: `
    <nav class="nav_bar">
        <input class="search"type="text" placeholder="Search By..." ng-model="$ctrl.info.data.results.title">
        <button type="button">Search</button>
        <a href="#">Search</a>
        <a href="#!/movie-list">Home</a>
        <a href="#!/movie-watchlist">Watchlist</a>
    </nav>
    `,
    controller: function() {
        const vm = this;
    }
}


angular.module("Hotflix").component("movieWatchlist", movieWatchlist);