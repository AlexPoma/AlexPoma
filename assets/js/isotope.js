$(document).ready(function() {
	
    var $container = $('.isotope');
    // console.log($('.isotope'));
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
        });
    });
    
    // filter items on click
    $('#filters').on( 'click', '.type', function() {
        var filterValue = $(this).attr('data-filter');
        console.log($('.filterValue'));
        $container.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        var $typeGroup = $( typeGroup );
        $typeGroup.on( 'click', '.type', function() {
          $typeGroup.find('.active').removeClass('active');
          $( this ).addClass('active');
        });
    });
});

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