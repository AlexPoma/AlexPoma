window.addEventListener("load", function(){    
    $("body").removeClass("preload");
    var $homeIcon = $('.isotope-item');
    if (window.innerWidth < 600){
        $homeIcon.removeClass("col-2");
        $homeIcon.addClass("col-3");
    }
    if (window.innerWidth >= 600){
        $homeIcon.addClass("col-2");
        $homeIcon.removeClass("col-3");
    }
});