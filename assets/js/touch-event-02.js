var startingX, startingY, movingX, movingY;

document.addEventListener("touchstart", function(evt){
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
})

document.addEventListener("touchmove", function(evt) {
    movingX = evt.touches[0].clientX;
    movingY = evt.touches[0].clientY;
})

document.addEventListener("touchend", function(){
    const nav = document.querySelector(".collapse_navbarBackground");
    if ((startingX + 100 < movingX) && !((startingY + 100 < movingY) || (startingY - 100 > movingY))) {
        //console.log("rigth");
        if (window.innerWidth < 992) {
            nav.classList.add("nav--open");
        }
    } else if ((startingX - 100 > movingX) && !((startingY + 100 < movingY) || (startingY - 100 > movingY))) {
        //console.log("left");
        if (window.innerWidth < 992) {
            nav.classList.remove("nav--open");
        }
    }
})