var startingX, startingY, movingX, movingY;

function touchStart(evt) {
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
}

function touchMove(evt) {
    movingX = evt.touches[0].clientX;
    movingY = evt.touches[0].clientY;
}

function touchEnd(evt) {
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
    /*
    if (startingX + 100 < movingX) {
        console.log("rigth");
    } else if (startingX - 100 > movingX) {
        console.log("left");
    }
    if (startingY + 100 < movingY) {
        console.log('down');
    } else if (startingY - 100 > movingY) {
        console.log('up');
    }
    */
}