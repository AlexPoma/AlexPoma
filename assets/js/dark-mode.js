$(document).ready(function() {

    // localStorage.clear();
    if(!localStorage.getItem("DarkModeVar")){
        localStorage.setItem("DarkModeVar","Ligth");
    }
    
    var a_link = document.getElementById('resume-button_href');

    let def = localStorage.getItem("DarkModeVar");
    
    if (def == "Dark"){
        $('body').addClass('dark-mode');
        a_link.setAttribute("href", "assets/pdf/resume-dark.pdf");
    }
    else{
        $('body').removeClass('dark-mode');
        a_link.setAttribute("href", "assets/pdf/resume-light.pdf");
    }

    document.getElementById("darkmode").checked = (localStorage.getItem("DarkModeVar")=="Dark")?true:false;
    // console.log(localStorage.getItem("DarkModeVar"));

    $('#darkmode').on('change', function(e){

		if ($(this).is(':checked')) {
			$('body').addClass('dark-mode');
			localStorage.setItem("DarkModeVar","Dark");
            a_link.setAttribute("href", "assets/pdf/resume-dark.pdf");
		} 
        else {
			$('body').removeClass('dark-mode');
			localStorage.setItem("DarkModeVar","Ligth");
            a_link.setAttribute("href", "assets/pdf/resume-light.pdf");
		}
        // console.log(localStorage.getItem("DarkModeVar"));
	});
});	