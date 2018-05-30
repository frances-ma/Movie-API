"use strict"; 

const poster = {
    template: `
    <header class="header">
        <img class="logo" src="img/HF-LOGO.png">
        <h1>Hot Flix</h1>
    </header>   
    `,
    controller: function() {
        const vm = this;
    }
}


angular.module("Hotflix").component("poster", poster);