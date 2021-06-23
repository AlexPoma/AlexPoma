$(document).ready(function () {

    function set_href() {
        let var_theme = localStorage.getItem("DarkModeVar");
        let var_lang = localStorage.getItem("lang_strg");
        var a_link = document.getElementById('resume-button_href');

        a_link.setAttribute("href", "assets/pdf/resume-" + var_theme.toLowerCase() + "_" + var_lang.toLowerCase() + ".pdf");
    }

    set_href();

    $('#darkmode').on('change', function (e) {
        set_href();
    });

    $('.translate').click(function () {
        set_href();
    });
});