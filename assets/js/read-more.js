$(document).ready(function () {
    $(".JOB_01 #toggle_read_more").click(function () {
        var elem = $(".JOB_01 #toggle_read_more").text();
        let def = localStorage.getItem("lang_strg");
        if (def == 'en') {
            if (elem == "Read More") {
                $(".JOB_01 #toggle_read_more").text("Read Less");
                $(".JOB_01 #content_read_more").slideDown();
            } else {
                $(".JOB_01 #toggle_read_more").text("Read More");
                $(".JOB_01 #content_read_more").slideUp();
            }
        }
        if (def == 'es') {
            if (elem == "Leer Más") {
                $(".JOB_01 #toggle_read_more").text("Leer Menos");
                $(".JOB_01 #content_read_more").slideDown();
            } else {
                $(".JOB_01 #toggle_read_more").text("Leer Más");
                $(".JOB_01 #content_read_more").slideUp();
            }
        }
    });

    $(".JOB_02 #toggle_read_more").click(function () {
        var elem = $(".JOB_02 #toggle_read_more").text();
        let def = localStorage.getItem("lang_strg");
        if (def == 'en') {
            if (elem == "Read More") {
                $(".JOB_02 #toggle_read_more").text("Read Less");
                $(".JOB_02 #content_read_more").slideDown();
            } else {
                $(".JOB_02 #toggle_read_more").text("Read More");
                $(".JOB_02 #content_read_more").slideUp();
            }
        }
        if (def == 'es') {
            if (elem == "Leer Más") {
                $(".JOB_02 #toggle_read_more").text("Leer Menos");
                $(".JOB_02 #content_read_more").slideDown();
            } else {
                $(".JOB_02 #toggle_read_more").text("Leer Más");
                $(".JOB_02 #content_read_more").slideUp();
            }
        }
    });

    $(".JOB_03 #toggle_read_more").click(function () {
        var elem = $(".JOB_03 #toggle_read_more").text();
        let def = localStorage.getItem("lang_strg");
        if (def == 'en') {
            if (elem == "Read More") {
                $(".JOB_03 #toggle_read_more").text("Read Less");
                $(".JOB_03 #content_read_more").slideDown();
            } else {
                $(".JOB_03 #toggle_read_more").text("Read More");
                $(".JOB_03 #content_read_more").slideUp();
            }
        }
        if (def == 'es') {
            if (elem == "Leer Más") {
                $(".JOB_03 #toggle_read_more").text("Leer Menos");
                $(".JOB_03 #content_read_more").slideDown();
            } else {
                $(".JOB_03 #toggle_read_more").text("Leer Más");
                $(".JOB_03 #content_read_more").slideUp();
            }
        }
    });

    $(".JOB_04 #toggle_read_more").click(function () {
        var elem = $(".JOB_04 #toggle_read_more").text();
        let def = localStorage.getItem("lang_strg");
        if (def == 'en') {
            if (elem == "Read More") {
                $(".JOB_04 #toggle_read_more").text("Read Less");
                $(".JOB_04 #content_read_more").slideDown();
            } else {
                $(".JOB_04 #toggle_read_more").text("Read More");
                $(".JOB_04 #content_read_more").slideUp();
            }
        }
        if (def == 'es') {
            if (elem == "Leer Más") {
                $(".JOB_04 #toggle_read_more").text("Leer Menos");
                $(".JOB_04 #content_read_more").slideDown();
            } else {
                $(".JOB_04 #toggle_read_more").text("Leer Más");
                $(".JOB_04 #content_read_more").slideUp();
            }
        }
    });
});