document.addEventListener("DOMContentLoaded", () => {

    const url = window.location.href
    const url_item = url.substring(url.indexOf("#"))

    // console.log(url_item);
    // console.log(url.indexOf("#"));

    if(!(url_item=="#" || url.indexOf("#") == -1)){
        $(".nav_list_item .aboutme_page1").each(function(e) {
            $(this).removeClass("active");
        }); 
    }
    if(url_item=="#job"){
        $(".nav_list_item .job_page2").each(function(e) {
            $(this).addClass("active");
        });
    }
    else if (url_item=="#resume"){
        $(".nav_list_item .resume_page3").each(function(e) {
            $(this).addClass("active");
        });
    }
    else if (url_item=="#blog"){
        $(".nav_list_item .blog_page4").each(function(e) {
            $(this).addClass("active");
        });
    }
    else if (url_item=="#contact"){
        $(".nav_list_item .contact_page5").each(function(e) {
            $(this).addClass("active");
        });
    }

    $(".nav_list_item li").click(function(e) {
        $(this).parent().find('li').removeClass("active");
        $(this).addClass("active"); 
    }); 
}); 
/*
const linkColor = document.querySelector(".aboutme_page1");

console.log(localStorage.getItem("linkColor"));

function colorLink(){
    if(linkColor){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
*/