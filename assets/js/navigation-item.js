document.addEventListener("DOMContentLoaded", () => {

    const url = window.location.href
    const url_item = url.substring(url.indexOf("#"))

    // console.log(url_item);
    // console.log(url.indexOf("#"));

    if(!(url_item=="#" || url.indexOf("#") == -1)){
        $(".nav_list_item .aboutme_page_item").each(function(e) {
            $(this).removeClass("active");
        }); 
    }
    else{
        $(".aboutme_page").each(function(e) {
            $(this).removeClass("page_fixed");
        }); 
    }

    if(url_item=="#job"){
        $(".nav_list_item .job_page_item").each(function(e) {
            $(this).addClass("active");
        });
        $(".job_page").each(function(e) {
            $(this).removeClass("page_fixed");
        }); 
    }
    else if (url_item=="#resume"){
        $(".nav_list_item .resume_page_item").each(function(e) {
            $(this).addClass("active");
        });
        $(".resume_page").each(function(e) {
            $(this).removeClass("page_fixed");
        }); 
    }
    else if (url_item=="#blog"){
        $(".nav_list_item .blog_page_item").each(function(e) {
            $(this).addClass("active");
        });
        $(".blog_page").each(function(e) {
            $(this).removeClass("page_fixed");
        }); 
    }
    else if (url_item=="#contact"){
        $(".nav_list_item .contact_page_item").each(function(e) {
            $(this).addClass("active");
        });
        $(".contact_page").each(function(e) {
            $(this).removeClass("page_fixed");
        }); 
    }

    $(".nav_list_item li").click(function(e) {
        $(this).parent().find('li').removeClass("active");
        $(this).addClass("active"); 
        
        /******************************/

        const url = window.location.href
        const url_item = url.substring(url.indexOf("#"))

        const page_flag = $(this).data("page_flag");

        // console.log(page_flag);
        if(url_item=="#" || url.indexOf("#") == -1){
            $(".aboutme_page").each(function(e) {
                $(this).addClass("page_fixed");
            }); 
        }
        else if(url_item=="#job"){
            $(".job_page").each(function(e) {
                $(this).addClass("page_fixed");
            }); 
        }
        else if (url_item=="#resume"){
            $(".resume_page").each(function(e) {
                $(this).addClass("page_fixed");
            }); 
        }
        else if (url_item=="#blog"){
            $(".blog_page").each(function(e) {
                $(this).addClass("page_fixed");
            }); 
        }
        else if (url_item=="#contact"){
            $(".contact_page").each(function(e) {
                $(this).addClass("page_fixed");
            }); 
        }

        if(page_flag=="aboutme_page_flag"){
            $(".aboutme_page").each(function(e) {
                $(this).removeClass("page_fixed");
            });
        }
        else if(page_flag=="job_page_flag"){
            $(".job_page").each(function(e) {
                $(this).removeClass("page_fixed");
            }); 
        }
        else if (page_flag=="resume_page_flag"){
            $(".resume_page").each(function(e) {
                $(this).removeClass("page_fixed");
            }); 
        }
        else if (page_flag=="blog_page_flag"){
            $(".blog_page").each(function(e) {
                $(this).removeClass("page_fixed");
            }); 
        }
        else if (page_flag=="contact_page_flag"){
            $(".contact_page").each(function(e) {
                $(this).removeClass("page_fixed");
            }); 
        }

        /*document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;*/
    });
}); 