"use strict";

// Makes nav bar fixed when it hits the top
window.addEventListener("scroll", function() {
  let nav = document.querySelector(".nav_bar");
  let header = document.querySelector(".header");
  let navTop = nav.offsetTop;

  if (window.scrollY >= 465) {
    nav.style.paddingTop = "40px";
    header.style.marginTop = "-24px";
    header.style.marginBottom = "24px";
    document.body.style.paddingTop = "148px";
    nav.classList.add('fixed_nav');
  } else {
    nav.classList.remove("fixed_nav");
    header.style.marginTop = "0px";
    header.style.marginBottom = "0px";
    document.body.style.paddingTop = "0px";
  }
  
});