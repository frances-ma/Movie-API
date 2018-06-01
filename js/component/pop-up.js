"use strict"; 

const popUp = {
    template: `
    
    `, 

    controller: ["MovieService", function(MovieService) {
        const vm = this;
        let modal = document.querySelector(".movie_modal");
        // vm.modalStuff = MovieService.sendModalInfo(info);
        console.log(vm.modalStuff);
       
    }] 
}



angular.module("Hotflix").component("popUp", popUp); 