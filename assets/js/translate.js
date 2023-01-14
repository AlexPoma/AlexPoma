$(document).ready(function () {
    /***   SLIDE BAR   ***/
    $.getJSON('assets/json/lang_slidebar.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   ABOUT ME   ***/
    $.getJSON('assets/json/lang_about_me.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   SKILLS   ***/
    $.getJSON('assets/json/lang_skills.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   TESTIMONIALS   ***/
    $.getJSON('assets/json/lang_testimonials.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   FOOTER   ***/
    $.getJSON('assets/json/lang_footer.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   WORK EXPERIENCE   ***/
    $.getJSON('assets/json/lang_work_experience.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
    
                let elem = $("#toggle_read_more").text();
                if ($('#content_read_more').css('display') == 'block') {
                    if (elem == "Read More") {
                        $("#toggle_read_more").text("Read Less");
                    }
                    if (elem == "Leer Más") {
                        $("#toggle_read_more").text("Leer Menos");
                    }
                }
    
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   CV MAIN   ***/
    $.getJSON('assets/json/lang_cv_main.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   CV WORK EXPERIENCE   ***/
    $.getJSON('assets/json/lang_cv_work_exp.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   CV DETAILS   ***/
    $.getJSON('assets/json/lang_cv_details.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   CV RESEARCH   ***/
    $.getJSON('assets/json/lang_cv_research.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon

    /***   BLOG   ***/
    $.getJSON('assets/json/lang_blog.json', function(json){
        if(!localStorage.getItem("lang_strg")){
            localStorage.setItem("lang_strg","es");
        }
        document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
        let def = localStorage.getItem("lang_strg");
        $('.lang').each(function(index,value){
            $(this).text(json[def][$(this).attr('key')]);
        }); //Cierra Each
        $('.translate').click(function(){
            let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
            localStorage.setItem("lang_strg",lang)
            $('.lang').each(function(index,value){
                $(this).text(json[lang][$(this).attr('key')]);
            }); //Cierra Each
        }); //Cierre Click
    }); //Cierre JSon
});