$(document).ready(function () {
    $("#toggle").click(function () {
        var elem = $("#toggle").text();
        let def = localStorage.getItem("lang_strg");
        if (def == 'en') {
            if (elem == "Read More") {
                //Stuff to do when btn is in the read more state
                $("#toggle").text("Read Less");
                $("#content_read_more").slideDown();
            } else {
                //Stuff to do when btn is in the read less state
                $("#toggle").text("Read More");
                $("#content_read_more").slideUp();
            }
        }
        if (def == 'es') {
            if (elem == "Leer Más") {
                //Stuff to do when btn is in the read more state
                $("#toggle").text("Leer Menos");
                $("#content_read_more").slideDown();
            } else {
                //Stuff to do when btn is in the read less state
                $("#toggle").text("Leer Más");
                $("#content_read_more").slideUp();
            }
        }
    });
});