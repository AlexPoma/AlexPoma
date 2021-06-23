document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".collapse_navbarBackground");

    document.querySelector("#id_nav_bar").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });

    var $homeIcon = $('.collapse_navbarBackground');
    $(window).resize(function () {
        if (window.innerWidth >= 992) {
            $homeIcon.removeClass("nav--open");
        }
    });
});
