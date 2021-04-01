$.getJSON('assets/json/lang.json', function(json){
    // localStorage.clear();
    // console.log(json);
    if(!localStorage.getItem("lang_strg")){
        localStorage.setItem("lang_strg","es");
    }
    // console.log(localStorage.getItem("lang"));
    document.getElementById("languagemode").checked = (localStorage.getItem("lang_strg")=="en")?true:false;
    let def = localStorage.getItem("lang_strg");
    // console.log($('.translate'));
    $('.lang').each(function(index,value){
        $(this).text(json[def][$(this).attr('key')]);
    }); //Cierra Each

    $('.translate').click(function(){
        // let lang = $(this).attr('id');
        let lang = (document.getElementById("languagemode").checked == true)?"en":"es";
        // console.log(document.getElementById("languagemode").checked);

        localStorage.setItem("lang_strg",lang)
        $('.lang').each(function(index,value){
            $(this).text(json[lang][$(this).attr('key')]);
        }); //Cierra Each
    }); //Cierre Click
}); //Cierre JSon