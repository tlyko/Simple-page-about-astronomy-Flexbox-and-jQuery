$(".arrow").on("click", function () {
   $('html,body').animate({ scrollTop: 0 }, 400);
})


var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector(".page-header").classList.toggle("nav-opened");
}, false);

