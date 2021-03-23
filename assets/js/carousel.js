// Coding Skills
const slider = tns({
    container: '.coding-carousel',
    loop: true,
    items: 3,
    responsive: {
	    0:{
	        items:1,
        },
        265:{
	        items:2,
        },
        370:{
            items:3,
        },
        485:{
            items:4,
        },
        580:{
            items:5,
        },
        767:{
            items:6,
        },
        992:{
            items:5,
        },
        1200: {
	        items:6,
        },
        1350: {
	        items:7,
        },
        // 1400: {
	    //     items:7,
        // },
        1470: {
	        items:8,
        }

	},
    slideBy: 'page',
    nav: true,    
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    gutter: 30,
    navPosition: 'bottom',
    mouseDrag: true,
    controls: false,
    speed: 800,

});