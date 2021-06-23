$(document).ready(function () {

    // localStorage.clear();
    if (!localStorage.getItem("DarkModeVar")) {
        localStorage.setItem("DarkModeVar", "Light");
    }

    let def = localStorage.getItem("DarkModeVar");

    if (def == "Dark") {
        $('body').addClass('dark-mode');
    }
    else {
        $('body').removeClass('dark-mode');
    }

    document.getElementById("darkmode").checked = (localStorage.getItem("DarkModeVar") == "Dark") ? true : false;
    // console.log(localStorage.getItem("DarkModeVar"));

    $('#darkmode').on('change', function (e) {

        if ($(this).is(':checked')) {
            $('body').addClass('dark-mode');
            localStorage.setItem("DarkModeVar", "Dark");
        }
        else {
            $('body').removeClass('dark-mode');
            localStorage.setItem("DarkModeVar", "Light");
        }
        // console.log(localStorage.getItem("DarkModeVar"));
    });
});