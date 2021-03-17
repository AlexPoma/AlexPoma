document.addEventListener("DOMContentLoaded", () => {
    var $homeIcon = $('.isotope-item');
    $(window).resize(function() {
        if (window.innerWidth < 600){
            $homeIcon.removeClass("col-2");
            $homeIcon.addClass("col-3");
        }
        if (window.innerWidth >= 600){
            $homeIcon.addClass("col-2");
            $homeIcon.removeClass("col-3");
        }
    });
});