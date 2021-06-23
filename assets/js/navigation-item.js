document.addEventListener("DOMContentLoaded", () => {

    const url = window.location.href
    const url_item = url.substring(url.indexOf("#"))

    // console.log(url_item);
    // console.log(url.indexOf("#"));

    const inClass = 'animated-section-moveFromRight animated-section-ontop';
    const outClass = 'animated-section-scaleDown';
    const sleep_time = 500

    if (!(url_item == "#" || url.indexOf("#") == -1)) {
        $(".nav_list_item .aboutme_page_item").each(function (e) {
            $(this).removeClass("active");
        });
    }
    else {
        $(".aboutme_page").each(function (e) {
            $(this).removeClass("page_fixed");
            $(this).addClass("section-active");
        });
    }

    if (url_item == "#job") {
        $(".nav_list_item .job_page_item").each(function (e) {
            $(this).addClass("active");
        });
        $(".job_page").each(function (e) {
            $(this).removeClass("page_fixed");
            $(this).addClass("section-active");
        });
    }
    else if (url_item == "#resume") {
        $(".nav_list_item .resume_page_item").each(function (e) {
            $(this).addClass("active");
        });
        $(".resume_page").each(function (e) {
            $(this).removeClass("page_fixed");
            $(this).addClass("section-active");
        });
    }
    else if (url_item == "#blog") {
        $(".nav_list_item .blog_page_item").each(function (e) {
            $(this).addClass("active");
        });
        $(".blog_page").each(function (e) {
            $(this).removeClass("page_fixed");
            $(this).addClass("section-active");
        });
    }

    $(".nav_list_item li").click(function (e) {

        const divclassant = $(this).parent().find('.active').data('page_flag');
        $(this).parent().find('li').removeClass("active");
        $(this).addClass("active");
        const divclass = $(this).parent().find('.active').data('page_flag');

        $('html, body').animate({ scrollTop: 0 }, 'fast');
        // $('html,body').scrollTop(0);

        const url = window.location.href
        const url_item = url.substring(url.indexOf("#"))
        const page_flag = $(this).data("page_flag");

        if (url_item == "#" || url.indexOf("#") == -1) {
            $(".aboutme_page").each(function (e) {
                $(this).addClass("page_fixed");

                if (divclass != 'aboutme_page_flag') {
                    $(this).addClass(outClass);

                    setTimeout(function () {
                        $(".aboutme_page").removeClass(outClass);
                    }, sleep_time);

                    setTimeout(function () {
                        $(".aboutme_page").removeClass("section-active");
                    }, sleep_time);
                }
            });
        }
        else if (url_item == "#job") {
            $(".job_page").each(function (e) {
                $(this).addClass("page_fixed");

                if (divclass != 'job_page_flag') {
                    $(this).addClass(outClass);

                    setTimeout(function () {
                        $(".job_page").removeClass(outClass);
                    }, sleep_time);

                    setTimeout(function () {
                        $(".job_page").removeClass("section-active");
                    }, sleep_time);
                }
            });
        }
        else if (url_item == "#resume") {
            $(".resume_page").each(function (e) {
                $(this).addClass("page_fixed");

                if (divclass != 'resume_page_flag') {
                    $(this).addClass(outClass);

                    setTimeout(function () {
                        $(".resume_page").removeClass(outClass);
                    }, sleep_time);

                    setTimeout(function () {
                        $(".resume_page").removeClass("section-active");
                    }, sleep_time);
                }
            });
        }
        else if (url_item == "#blog") {
            $(".blog_page").each(function (e) {
                $(this).addClass("page_fixed");

                if (divclass != 'blog_page_flag') {
                    $(this).addClass(outClass);

                    setTimeout(function () {
                        $(".blog_page").removeClass(outClass);
                    }, sleep_time);

                    setTimeout(function () {
                        $(".blog_page").removeClass("section-active");
                    }, sleep_time);
                }
            });
        }
        if (page_flag == "aboutme_page_flag") {
            $(".aboutme_page").each(function (e) {

                $(this).removeClass("page_fixed");

                if (divclassant != divclass) {
                    $(this).addClass("section-active");
                    $(this).addClass(inClass);

                    setTimeout(function () {
                        $(".aboutme_page").removeClass(inClass);
                    }, sleep_time);
                }
            });
        }
        else if (page_flag == "job_page_flag") {
            $(".job_page").each(function (e) {
                $(this).removeClass("page_fixed");

                if (divclassant != divclass) {
                    $(this).addClass("section-active");
                    $(this).addClass(inClass);

                    setTimeout(function () {
                        $(".job_page").removeClass(inClass);
                    }, sleep_time);
                }
            });
        }
        else if (page_flag == "resume_page_flag") {
            $(".resume_page").each(function (e) {
                $(this).removeClass("page_fixed");

                if (divclassant != divclass) {
                    $(this).addClass("section-active");
                    $(this).addClass(inClass);

                    setTimeout(function () {
                        $(".resume_page").removeClass(inClass);
                    }, sleep_time);
                }
            });
        }
        else if (page_flag == "blog_page_flag") {
            $(".blog_page").each(function (e) {
                $(this).removeClass("page_fixed");

                if (divclassant != divclass) {
                    $(this).addClass("section-active");
                    $(this).addClass(inClass);

                    setTimeout(function () {
                        $(".blog_page").removeClass(inClass);
                    }, sleep_time);
                }
            });
        }
    });
});