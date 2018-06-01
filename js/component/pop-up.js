"use strict"; 

const popUp = {
    template: `
    
    `, 

    controller: ["MovieService", function(MovieService) {
        const vm = this;
        let modal = document.querySelector(".movie_modal");
        // vm.modalStuff = MovieService.sendModalInfo(info);
        console.log(vm.modalStuff);
     

        vm.closeBtn = document.querySelector(".close");
        vm.closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        })



       
    }] 
}



angular.module("Hotflix").component("popUp", popUp); 