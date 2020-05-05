$(document).ready(function () {
    new WOW().init();

    //smooth scrolling
    $(".to-link").bind("click", function (){
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 700);
        event.preventDefault();
    });
});